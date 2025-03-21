import React from 'react';
import { Alert, Button, Form, FormSection, Spinner } from '@patternfly/react-core';
import { Modal } from '@patternfly/react-core/deprecated';
import { ModelVersion } from '~/concepts/modelRegistry/types';
import { ProjectKind } from '~/k8sTypes';
import useProjectErrorForRegisteredModel from '~/pages/modelRegistry/screens/RegisteredModels/useProjectErrorForRegisteredModel';
import ProjectSelector from '~/pages/modelServing/screens/projects/InferenceServiceModal/ProjectSelector';
import ManageKServeModal from '~/pages/modelServing/screens/projects/kServeModal/ManageKServeModal';
import useServingPlatformStatuses from '~/pages/modelServing/useServingPlatformStatuses';
import { getProjectModelServingPlatform } from '~/pages/modelServing/screens/projects/utils';
import { ServingRuntimePlatform } from '~/types';
import ManageInferenceServiceModal from '~/pages/modelServing/screens/projects/InferenceServiceModal/ManageInferenceServiceModal';
import useRegisteredModelDeployInfo from '~/pages/modelRegistry/screens/RegisteredModels/useRegisteredModelDeployInfo';
import {
  ModelRegistryContext,
  useModelRegistryAPI,
} from '~/concepts/modelRegistry/context/ModelRegistryContext';
import { ModelRegistrySelectorContext } from '~/concepts/modelRegistry/context/ModelRegistrySelectorContext';
import { getKServeTemplates } from '~/pages/modelServing/customServingRuntimes/utils';
import useDataConnections from '~/pages/projects/screens/detail/data-connections/useDataConnections';
import { bumpBothTimestamps } from '~/concepts/modelRegistry/utils/updateTimestamps';
import useConnections from '~/pages/projects/screens/detail/connections/useConnections';
import useRegisteredModelById from '~/concepts/modelRegistry/apiHooks/useRegisteredModelById';
import { isRedHatRegistryUri } from '~/pages/modelRegistry/screens/utils';

interface DeployRegisteredModelModalProps {
  modelVersion: ModelVersion;
  onCancel: () => void;
  onSubmit?: () => void;
}

const DeployRegisteredModelModal: React.FC<DeployRegisteredModelModalProps> = ({
  modelVersion,
  onCancel,
  onSubmit,
}) => {
  const {
    servingRuntimeTemplates: [templates],
    servingRuntimeTemplateOrder: { data: templateOrder },
    servingRuntimeTemplateDisablement: { data: templateDisablement },
  } = React.useContext(ModelRegistryContext);
  const { preferredModelRegistry } = React.useContext(ModelRegistrySelectorContext);
  const modelRegistryApi = useModelRegistryAPI();

  const [selectedProject, setSelectedProject] = React.useState<ProjectKind | null>(null);
  const servingPlatformStatuses = useServingPlatformStatuses();
  const { platform, error: platformError } = getProjectModelServingPlatform(
    selectedProject,
    servingPlatformStatuses,
  );
  const [dataConnections] = useDataConnections(selectedProject?.metadata.name);
  const [connections] = useConnections(selectedProject?.metadata.name, true);
  const [registeredModel, registeredModelLoaded, registeredModelLoadError, refreshRegisteredModel] =
    useRegisteredModelById(modelVersion.registeredModelId);

  const {
    registeredModelDeployInfo,
    loaded: deployInfoLoaded,
    error: deployInfoError,
  } = useRegisteredModelDeployInfo(modelVersion, preferredModelRegistry?.metadata.name);

  const isOciModel = registeredModelDeployInfo.modelArtifactUri?.includes('oci://');
  const platformToUse = platform || (isOciModel ? ServingRuntimePlatform.SINGLE : undefined);
  const { loaded: projectDeployStatusLoaded, error: projectError } =
    useProjectErrorForRegisteredModel(selectedProject?.metadata.name, platformToUse);

  const error = platformError || projectError;

  const loaded = deployInfoLoaded && registeredModelLoaded;
  const loadError = deployInfoError || registeredModelLoadError;

  const handleSubmit = React.useCallback(async () => {
    if (!modelVersion.registeredModelId || !registeredModel) {
      return;
    }

    try {
      await bumpBothTimestamps(modelRegistryApi.api, registeredModel, modelVersion);
      refreshRegisteredModel();
      onSubmit?.();
    } catch (submitError) {
      throw new Error('Failed to update timestamps after deployment');
    }
  }, [modelRegistryApi.api, modelVersion, onSubmit, registeredModel, refreshRegisteredModel]);

  const onClose = React.useCallback(
    (submit: boolean) => {
      if (submit) {
        handleSubmit();
      }
      setSelectedProject(null);
      onCancel();
    },
    [handleSubmit, onCancel],
  );

  const projectSection = (
    <ProjectSelector
      selectedProject={selectedProject}
      setSelectedProject={setSelectedProject}
      error={error}
      modelRegistryName={preferredModelRegistry?.metadata.name}
      registeredModelId={modelVersion.registeredModelId}
      modelVersionId={modelVersion.id}
      isOciModel={isOciModel}
    />
  );

  if (
    (platformToUse === ServingRuntimePlatform.MULTI && !projectDeployStatusLoaded) ||
    !selectedProject ||
    !platformToUse
  ) {
    const modalForm = (
      <Form>
        {loadError ? (
          <Alert variant="danger" isInline title={loadError.name}>
            {loadError.message}
          </Alert>
        ) : !loaded ? (
          <Spinner />
        ) : isOciModel ? (
          <FormSection title="Model deployment">
            <Alert
              data-testid="oci-deploy-kserve-alert"
              variant="info"
              isInline
              title="This model uses an OCI storage location which supports deploying to only the single-model serving platform. Projects using the multi-model serving platform are excluded from the project selector."
            />
            {projectSection}
          </FormSection>
        ) : (
          <FormSection title="Model deployment">{projectSection}</FormSection>
        )}
      </Form>
    );

    return (
      <Modal
        title="Deploy model"
        description="Configure properties for deploying your model"
        variant="medium"
        isOpen
        onClose={() => onClose(false)}
        actions={[
          // The Deploy button is disabled as this particular return of the Modal
          // only happens when there's not a valid selected project, otherwise we'll
          // render the ManageKServeModal or ManageInferenceServiceModal
          <Button key="deploy" variant="primary" onClick={handleSubmit} isDisabled>
            Deploy
          </Button>,
          <Button key="cancel" variant="link" onClick={() => onClose(false)}>
            Cancel
          </Button>,
        ]}
        showClose
      >
        {modalForm}
      </Modal>
    );
  }

  if (platformToUse === ServingRuntimePlatform.SINGLE) {
    return (
      <ManageKServeModal
        onClose={onClose}
        servingRuntimeTemplates={getKServeTemplates(templates, templateOrder, templateDisablement)}
        shouldFormHidden={!!error}
        registeredModelDeployInfo={registeredModelDeployInfo}
        projectContext={{ currentProject: selectedProject, connections }}
        projectSection={projectSection}
        existingUriOption={
          registeredModelDeployInfo.modelArtifactUri &&
          isRedHatRegistryUri(registeredModelDeployInfo.modelArtifactUri)
            ? registeredModelDeployInfo.modelArtifactUri
            : undefined
        }
      />
    );
  }
  // platform === ServingRuntimePlatform.MULTI
  return (
    <ManageInferenceServiceModal
      onClose={onClose}
      shouldFormHidden={!!error}
      registeredModelDeployInfo={registeredModelDeployInfo}
      projectContext={{ currentProject: selectedProject, dataConnections, connections }}
      projectSection={projectSection}
    />
  );
};

export default DeployRegisteredModelModal;
