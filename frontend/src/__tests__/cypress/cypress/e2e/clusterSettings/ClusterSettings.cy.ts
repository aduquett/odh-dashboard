import { mockClusterSettings } from '~/__mocks__/mockClusterSettings';
import { mockDscStatus } from '~/__mocks__/mockDscStatus';
import {
  clusterSettings,
  cullerSettings,
  modelServingSettings,
  notebookTolerationSettings,
  pvcSizeSettings,
  telemetrySettings,
} from '~/__tests__/cypress/cypress/pages/clusterSettings';
import { be } from '~/__tests__/cypress/cypress/utils/should';
import { StackComponent } from '~/concepts/areas/types';

it('Cluster Settings', () => {
  cy.interceptOdh(
    'GET /api/dsc/status',
    mockDscStatus({
      installedComponents: { [StackComponent.K_SERVE]: true, [StackComponent.MODEL_MESH]: true },
    }),
  );
  cy.interceptOdh('GET /api/cluster-settings', mockClusterSettings({}));
  cy.interceptOdh('PUT /api/cluster-settings', { success: true }).as('clusterSettings');

  clusterSettings.visit();

  // check serving platform field
  modelServingSettings.findSinglePlatformCheckbox().should('be.checked');
  modelServingSettings.findMultiPlatformCheckbox().should('be.checked');
  modelServingSettings.findSubmitButton().should('be.disabled');
  modelServingSettings.findMultiPlatformCheckbox().uncheck();
  modelServingSettings.findAlert().should(be.info);
  modelServingSettings.findSubmitButton().should('be.enabled');
  modelServingSettings.findSinglePlatformCheckbox().uncheck();
  modelServingSettings.findAlert().should(be.warning);
  modelServingSettings.findMultiPlatformCheckbox().check();
  modelServingSettings.findAlert().should(be.info);
  modelServingSettings.findSinglePlatformCheckbox().check();
  modelServingSettings.findAlert().should('not.exist');
  modelServingSettings.findSubmitButton().should('be.disabled');

  // check PVC size field
  pvcSizeSettings.findInput().clear();
  pvcSizeSettings.findInput().type('10');
  pvcSizeSettings.findSubmitButton().should('be.enabled');
  pvcSizeSettings.findInput().clear();
  pvcSizeSettings.findSubmitButton().should('be.disabled');
  pvcSizeSettings.findHint().should(be.error);
  pvcSizeSettings.findRestoreDefaultsButton().click();
  pvcSizeSettings.findHint().should(be.indeterminate);

  // // check culler field
  cullerSettings.findLimitedOption().click();
  cullerSettings.findSubmitButton().should('be.enabled');
  cullerSettings.findHoursInput().clear();
  cullerSettings.findSubmitButton().should('be.disabled');
  cullerSettings.findHint().should(be.error);
  cullerSettings.findMinutesInput().type('20');
  cullerSettings.findSubmitButton().should('be.enabled');
  cullerSettings.findHint().should(be.indeterminate);
  cullerSettings.findUnlimitedOption().click();
  cullerSettings.findSubmitButton().should('be.disabled');

  // check user tracking field
  telemetrySettings.findEnabledCheckbox().click();
  telemetrySettings.findSubmitButton().should('be.enabled');
  telemetrySettings.findEnabledCheckbox().click();
  telemetrySettings.findSubmitButton().should('be.disabled');

  // check notebook toleration field
  notebookTolerationSettings.findKeyError().should('not.exist');
  notebookTolerationSettings.findKeyInput().clear();
  notebookTolerationSettings.findKeyError().should('exist');
  notebookTolerationSettings.findSubmitButton().should('be.disabled');
  notebookTolerationSettings.findKeyInput().type('NotebooksOnlyChange');
  notebookTolerationSettings.findKeyError().should('not.exist');
  notebookTolerationSettings.findEnabledCheckbox().click();
  notebookTolerationSettings.findSubmitButton().should('be.enabled');

  notebookTolerationSettings.findSubmitButton().click();

  cy.wait('@clusterSettings').then((interception) => {
    expect(interception.request.body).to.eql(
      mockClusterSettings({
        pvcSize: 20,
        cullerTimeout: 31536000,
        notebookTolerationSettings: { enabled: false, key: 'NotebooksOnlyChange' },
      }),
    );
  });
});
