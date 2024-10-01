import { OdhApplication } from '~/types';

export const mockComponents = (): OdhApplication[] => [
  {
    metadata: {
      annotations: {
        'internal.config.kubernetes.io/previousKinds': 'OdhApplication',
        'internal.config.kubernetes.io/previousNames': 'jupyter',
        'internal.config.kubernetes.io/previousNamespaces': 'default',
        'kfctl.kubeflow.io/kfdef-instance': 'opendatahub.opendatahub',
      },
      name: 'jupyter',
    },
    spec: {
      category: 'Red Hat managed',
      description:
        'A multi-user version of the notebook designed for companies, classrooms and research labs.',
      displayName: 'Jupyter',
      docsLink: 'https://jupyter.org',
      getStartedLink: 'https://jupyterlab.readthedocs.io/en/stable/getting_started/overview.html',
      getStartedMarkDown:
        '# Jupyter\nLaunch Jupyter and start a notebook server to start working with your notebooks.\n## Prerequisites\n- You have logged in to Red Hat OpenShift AI.\n- You know the names and values you want to use for any environment variables in your notebook server environment, for example, `AWS_SECRET_ACCESS_KEY`.\n- If you want to work with a very large data set, work with your administrator to proactively increase the storage capacity of your notebook server.\n## Procedure\n1. Locate the **Jupyter** card on the **Enabled applications** page.\n2. Click **Launch application**.\n\n\n  i. If prompted, select your identity provider.\n\n  ii. Enter your credentials and click **Log in** (or equivalent for your identity provider).\n\n  If you see **Error 403: Forbidden**, you are not in the default user group or the default administrator group for OpenShift AI. Contact your administrator so that they can add you to the correct group using [Adding users for OpenShift AI](https://docs.redhat.com/en/documentation/red_hat_openshift_ai_cloud_service/1/html/managing_users/adding-users_user-mgmt).\n\n3. Start a notebook server.\n\n\n  This is not required if you have previously launched Jupyter.\n\n  i. Select the **Notebook image** to use for your server.\n\n  ii. If the notebook image contains multiple versions, select the version of the notebook image from the **Versions** section.\n\n  iii. Select the **Container size** for your server.\n\n  iv. Optional: Select the **Number of GPUs** (graphics processing units) for your server.\n\n  v. Optional: Select and specify values for any new **Environment variables**.\n\n  For example, if you plan to integrate with Red Hat OpenShift Streams for Apache Kafka, create environment variables to store your Kafka bootstrap server and the service account username and password here.\n\n  he interface stores these variables so that you only need to enter them once. Example variable names for common environment variables are automatically provided for frequently integrated environments and frameworks, such as Amazon Web Services (AWS).\n\n  vi. Click **Start server**.\n\n  The **Starting server** progress indicator appears. If you encounter a problem during this process, an error message appears with more information. Click **Expand event log** to view additional information on the server creation process. Depending on the deployment size and resources you requested, starting the server can take up to several minutes. After the server starts, the JupyterLab interface opens.\n\n## Verification\nThe JupyterLab interface opens in the same tab.',
      img: '<svg width="44" height="51" viewBox="0 0 44 51" version="2.0" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:figma="http://www.figma.com/figma/ns">\\n<title>Group.svg</title>\\n<desc>Created using Figma 0.90</desc>\\n<g id="Canvas" transform="translate(-1640 -2453)" figma:type="canvas">\\n<g id="Group" style="mix-blend-mode:normal;" figma:type="group">\\n<g id="Group" style="mix-blend-mode:normal;" figma:type="group">\\n<g id="Group" style="mix-blend-mode:normal;" figma:type="group">\\n<g id="g" style="mix-blend-mode:normal;" figma:type="group">\\n<g id="path" style="mix-blend-mode:normal;" figma:type="group">\\n<g id="path9 fill" style="mix-blend-mode:normal;" figma:type="vector">\\n<use xlink:href="#path0_fill" transform="translate(1640.54 2474.36)" fill="#4E4E4E" style="mix-blend-mode:normal;"/>\\n</g>\\n</g>\\n<g id="path" style="mix-blend-mode:normal;" figma:type="group">\\n<g id="path10 fill" style="mix-blend-mode:normal;" figma:type="vector">\\n<use xlink:href="#path1_fill" transform="translate(1645.68 2474.37)" fill="#4E4E4E" style="mix-blend-mode:normal;"/>\\n</g>\\n</g>\\n<g id="path" style="mix-blend-mode:normal;" figma:type="group">\\n<g id="path11 fill" style="mix-blend-mode:normal;" figma:type="vector">\\n<use xlink:href="#path2_fill" transform="translate(1653.39 2474.26)" fill="#4E4E4E" style="mix-blend-mode:normal;"/>\\n</g>\\n</g>\\n<g id="path" style="mix-blend-mode:normal;" figma:type="group">\\n<g id="path12 fill" style="mix-blend-mode:normal;" figma:type="vector">\\n<use xlink:href="#path3_fill" transform="translate(1660.43 2474.39)" fill="#4E4E4E" style="mix-blend-mode:normal;"/>\\n</g>\\n</g>\\n<g id="path" style="mix-blend-mode:normal;" figma:type="group">\\n<g id="path13 fill" style="mix-blend-mode:normal;" figma:type="vector">\\n<use xlink:href="#path4_fill" transform="translate(1667.55 2472.54)" fill="#4E4E4E" style="mix-blend-mode:normal;"/>\\n</g>\\n</g>\\n<g id="path" style="mix-blend-mode:normal;" figma:type="group">\\n<g id="path14 fill" style="mix-blend-mode:normal;" figma:type="vector">\\n<use xlink:href="#path5_fill" transform="translate(1672.47 2474.29)" fill="#4E4E4E" style="mix-blend-mode:normal;"/>\\n</g>\\n</g>\\n<g id="path" style="mix-blend-mode:normal;" figma:type="group">\\n<g id="path15 fill" style="mix-blend-mode:normal;" figma:type="vector">\\n<use xlink:href="#path6_fill" transform="translate(1679.98 2474.24)" fill="#4E4E4E" style="mix-blend-mode:normal;"/>\\n</g>\\n</g>\\n</g>\\n</g>\\n<g id="g" style="mix-blend-mode:normal;" figma:type="group">\\n<g id="path" style="mix-blend-mode:normal;" figma:type="group">\\n<g id="path16 fill" style="mix-blend-mode:normal;" figma:type="vector">\\n<use xlink:href="#path7_fill" transform="translate(1673.48 2453.69)" fill="#767677" style="mix-blend-mode:normal;"/>\\n</g>\\n</g>\\n<g id="path" style="mix-blend-mode:normal;" figma:type="group">\\n<g id="path17 fill" style="mix-blend-mode:normal;" figma:type="vector">\\n<use xlink:href="#path8_fill" transform="translate(1643.21 2484.27)" fill="#F37726" style="mix-blend-mode:normal;"/>\\n</g>\\n</g>\\n<g id="path" style="mix-blend-mode:normal;" figma:type="group">\\n<g id="path18 fill" style="mix-blend-mode:normal;" figma:type="vector">\\n<use xlink:href="#path9_fill" transform="translate(1643.21 2457.88)" fill="#F37726" style="mix-blend-mode:normal;"/>\\n</g>\\n</g>\\n<g id="path" style="mix-blend-mode:normal;" figma:type="group">\\n<g id="path19 fill" style="mix-blend-mode:normal;" figma:type="vector">\\n<use xlink:href="#path10_fill" transform="translate(1643.28 2496.09)" fill="#9E9E9E" style="mix-blend-mode:normal;"/>\\n</g>\\n</g>\\n<g id="path" style="mix-blend-mode:normal;" figma:type="group">\\n<g id="path20 fill" style="mix-blend-mode:normal;" figma:type="vector">\\n<use xlink:href="#path11_fill" transform="translate(1641.87 2458.43)" fill="#616262" style="mix-blend-mode:normal;"/>\\n</g>\\n</g>\\n</g>\\n</g>\\n</g>\\n</g>\\n<defs>\\n<path id="path0_fill" d="M 1.74498 5.47533C 1.74498 7.03335 1.62034 7.54082 1.29983 7.91474C 0.943119 8.23595 0.480024 8.41358 0 8.41331L 0.124642 9.3036C 0.86884 9.31366 1.59095 9.05078 2.15452 8.56466C 2.45775 8.19487 2.6834 7.76781 2.818 7.30893C 2.95261 6.85005 2.99341 6.36876 2.93798 5.89377L 2.93798 0L 1.74498 0L 1.74498 5.43972L 1.74498 5.47533Z"/>\\n<path id="path1_fill" d="M 5.50204 4.76309C 5.50204 5.43081 5.50204 6.02731 5.55545 6.54368L 4.496 6.54368L 4.42478 5.48423C 4.20318 5.85909 3.88627 6.16858 3.50628 6.38125C 3.12628 6.59392 2.69675 6.70219 2.26135 6.69503C 1.22861 6.69503 0 6.13415 0 3.84608L 0 0.0445149L 1.193 0.0445149L 1.193 3.6057C 1.193 4.84322 1.57583 5.67119 2.65309 5.67119C 2.87472 5.67358 3.09459 5.63168 3.29982 5.54796C 3.50505 5.46424 3.69149 5.34039 3.84822 5.18366C 4.00494 5.02694 4.1288 4.84049 4.21252 4.63527C 4.29623 4.43004 4.33813 4.21016 4.33575 3.98853L 4.33575 0L 5.52874 0L 5.52874 4.72748L 5.50204 4.76309Z"/>\\n<path id="path2_fill" d="M 0.0534178 2.27264C 0.0534178 1.44466 0.0534178 0.768036 0 0.153731L 1.06836 0.153731L 1.12177 1.2666C 1.3598 0.864535 1.70247 0.534594 2.11325 0.311954C 2.52404 0.0893145 2.98754 -0.0176786 3.45435 0.00238095C 5.03908 0.00238095 6.23208 1.32892 6.23208 3.30538C 6.23208 5.63796 4.7987 6.79535 3.24958 6.79535C 2.85309 6.81304 2.45874 6.7281 2.10469 6.54874C 1.75064 6.36937 1.44888 6.10166 1.22861 5.77151L 1.22861 5.77151L 1.22861 9.33269L 0.0534178 9.33269L 0.0534178 2.29935L 0.0534178 2.27264ZM 1.22861 4.00872C 1.23184 4.17026 1.24972 4.33117 1.28203 4.48948C 1.38304 4.88479 1.61299 5.23513 1.93548 5.48506C 2.25798 5.735 2.65461 5.87026 3.06262 5.86944C 4.31794 5.86944 5.05689 4.8456 5.05689 3.3588C 5.05689 2.05897 4.36246 0.946096 3.10714 0.946096C 2.61036 0.986777 2.14548 1.20726 1.79965 1.5662C 1.45382 1.92514 1.25079 2.3979 1.22861 2.89585L 1.22861 4.00872Z"/>\\n<path id="path3_fill" d="M 1.31764 0.0178059L 2.75102 3.85499C 2.90237 4.28233 3.06262 4.7987 3.16946 5.18153C 3.2941 4.7898 3.42764 4.29123 3.5879 3.82828L 4.88773 0.0178059L 6.14305 0.0178059L 4.36246 4.64735C 3.47216 6.87309 2.92908 8.02158 2.11 8.71601C 1.69745 9.09283 1.19448 9.35658 0.649917 9.48166L 0.356119 8.48453C 0.736886 8.35942 1.09038 8.16304 1.39777 7.90584C 1.8321 7.55188 2.17678 7.10044 2.4038 6.5882C 2.45239 6.49949 2.48551 6.40314 2.50173 6.3033C 2.49161 6.19586 2.46457 6.0907 2.42161 5.9917L 0 0L 1.29983 0L 1.31764 0.0178059Z"/>\\n<path id="path4_fill" d="M 2.19013 0L 2.19013 1.86962L 3.8995 1.86962L 3.8995 2.75992L 2.19013 2.75992L 2.19013 6.26769C 2.19013 7.06896 2.42161 7.53191 3.08043 7.53191C 3.31442 7.53574 3.54789 7.5088 3.77486 7.45179L 3.82828 8.34208C 3.48794 8.45999 3.12881 8.51431 2.76882 8.50234C 2.53042 8.51726 2.29161 8.48043 2.06878 8.39437C 1.84595 8.30831 1.64438 8.17506 1.47789 8.00377C 1.11525 7.51873 0.949826 6.91431 1.01494 6.31221L 1.01494 2.75102L 0 2.75102L 0 1.86072L 1.03274 1.86072L 1.03274 0.275992L 2.19013 0Z"/>\\n<path id="path5_fill" d="M 1.17716 3.57899C 1.153 3.88093 1.19468 4.18451 1.29933 4.46876C 1.40398 4.75301 1.5691 5.01114 1.78329 5.22532C 1.99747 5.43951 2.2556 5.60463 2.53985 5.70928C 2.8241 5.81393 3.12768 5.85561 3.42962 5.83145C 4.04033 5.84511 4.64706 5.72983 5.21021 5.49313L 5.41498 6.38343C 4.72393 6.66809 3.98085 6.80458 3.23375 6.78406C 2.79821 6.81388 2.36138 6.74914 1.95322 6.59427C 1.54505 6.43941 1.17522 6.19809 0.869071 5.88688C 0.562928 5.57566 0.327723 5.2019 0.179591 4.79125C 0.0314584 4.38059 -0.0260962 3.94276 0.0108748 3.50777C 0.0108748 1.54912 1.17716 0 3.0824 0C 5.21911 0 5.75329 1.86962 5.75329 3.06262C 5.76471 3.24644 5.76471 3.43079 5.75329 3.61461L 1.15046 3.61461L 1.17716 3.57899ZM 4.66713 2.6887C 4.70149 2.45067 4.68443 2.20805 4.61709 1.97718C 4.54976 1.74631 4.43372 1.53255 4.2768 1.35031C 4.11987 1.16808 3.92571 1.0216 3.70739 0.920744C 3.48907 0.81989 3.25166 0.767006 3.01118 0.765656C 2.52201 0.801064 2.06371 1.01788 1.72609 1.37362C 1.38847 1.72935 1.19588 2.19835 1.18607 2.6887L 4.66713 2.6887Z"/>\\n<path id="path6_fill" d="M 0.0534178 2.19228C 0.0534178 1.42663 0.0534178 0.767806 0 0.162404L 1.06836 0.162404L 1.06836 1.43553L 1.12177 1.43553C 1.23391 1.04259 1.4656 0.694314 1.78468 0.439049C 2.10376 0.183783 2.4944 0.034196 2.90237 0.0110538C 3.01466 -0.00368459 3.12839 -0.00368459 3.24068 0.0110538L 3.24068 1.12393C 3.10462 1.10817 2.9672 1.10817 2.83114 1.12393C 2.427 1.13958 2.04237 1.30182 1.7491 1.58035C 1.45583 1.85887 1.27398 2.23462 1.23751 2.63743C 1.20422 2.8196 1.18635 3.00425 1.1841 3.18941L 1.1841 6.65267L 0.00890297 6.65267L 0.00890297 2.20118L 0.0534178 2.19228Z"/>\\n<path id="path7_fill" d="M 6.03059 2.83565C 6.06715 3.43376 5.92485 4.02921 5.6218 4.54615C 5.31875 5.0631 4.86869 5.47813 4.32893 5.73839C 3.78917 5.99864 3.18416 6.09233 2.59097 6.00753C 1.99778 5.92272 1.44326 5.66326 0.998048 5.26219C 0.552837 4.86113 0.23709 4.33661 0.0910307 3.75546C -0.0550287 3.17431 -0.0247891 2.56283 0.177897 1.99893C 0.380583 1.43503 0.746541 0.944221 1.22915 0.589037C 1.71176 0.233853 2.28918 0.0303686 2.88784 0.00450543C 3.28035 -0.0170932 3.67326 0.0391144 4.04396 0.169896C 4.41467 0.300677 4.75587 0.503453 5.04794 0.766561C 5.34 1.02967 5.57718 1.34792 5.74582 1.70301C 5.91446 2.0581 6.01124 2.44303 6.03059 2.83565L 6.03059 2.83565Z"/>\\n<path id="path8_fill" d="M 18.6962 7.12238C 10.6836 7.12238 3.64131 4.24672 0 0C 1.41284 3.82041 3.96215 7.1163 7.30479 9.44404C 10.6474 11.7718 14.623 13.0196 18.6962 13.0196C 22.7695 13.0196 26.745 11.7718 30.0877 9.44404C 33.4303 7.1163 35.9796 3.82041 37.3925 4.0486e-13C 33.7601 4.24672 26.7445 7.12238 18.6962 7.12238Z"/>\\n<path id="path9_fill" d="M 18.6962 5.89725C 26.7089 5.89725 33.7512 8.77291 37.3925 13.0196C 35.9796 9.19922 33.4303 5.90333 30.0877 3.57559C 26.745 1.24785 22.7695 4.0486e-13 18.6962 0C 14.623 4.0486e-13 10.6474 1.24785 7.30479 3.57559C 3.96215 5.90333 1.41284 9.19922 0 13.0196C 3.64131 8.76401 10.648 5.89725 18.6962 5.89725Z"/>\\n<path id="path10_fill" d="M 7.59576 3.56656C 7.64276 4.31992 7.46442 5.07022 7.08347 5.72186C 6.70251 6.3735 6.13619 6.89698 5.45666 7.22561C 4.77713 7.55424 4.01515 7.67314 3.26781 7.56716C 2.52046 7.46117 1.82158 7.13511 1.26021 6.63051C 0.698839 6.12591 0.300394 5.46561 0.115637 4.73375C -0.0691191 4.00188 -0.0318219 3.23159 0.222777 2.52099C 0.477376 1.8104 0.93775 1.19169 1.54524 0.743685C 2.15274 0.295678 2.87985 0.0386595 3.63394 0.00537589C 4.12793 -0.0210471 4.62229 0.0501173 5.08878 0.214803C 5.55526 0.37949 5.98473 0.63447 6.35264 0.965179C 6.72055 1.29589 7.01971 1.69584 7.233 2.1422C 7.4463 2.58855 7.56957 3.07256 7.59576 3.56656L 7.59576 3.56656Z"/>\\n<path id="path11_fill" d="M 2.25061 4.37943C 1.81886 4.39135 1.39322 4.27535 1.02722 4.04602C 0.661224 3.81668 0.371206 3.48424 0.193641 3.09052C 0.0160762 2.69679 -0.0411078 2.25935 0.0292804 1.83321C 0.0996686 1.40707 0.294486 1.01125 0.589233 0.695542C 0.883981 0.37983 1.2655 0.158316 1.68581 0.0588577C 2.10611 -0.0406005 2.54644 -0.0135622 2.95143 0.136572C 3.35641 0.286707 3.70796 0.553234 3.96186 0.902636C 4.21577 1.25204 4.3607 1.66872 4.37842 2.10027C 4.39529 2.6838 4.18131 3.25044 3.78293 3.67715C 3.38455 4.10387 2.83392 4.35623 2.25061 4.37943Z"/>\\n</defs>\\n</svg>',
      internalRoute: 'notebookController',
      kfdefApplications: ['odh-notebook-controller', 'notebook-images'],
      provider: 'Jupyter',
      quickStart: 'create-jupyter-notebook',
      support: 'red hat',
      shownOnEnabledPage: true,
      isEnabled: true,
      link: null,
    },
  },
  {
    metadata: {
      annotations: {
        'opendatahub.io/categories': 'Model training,Notebook environments',
      },
      name: 'rhoai',
    },
    spec: {
      category: 'Red Hat managed',
      description: '',
      displayName: 'RHOAI',
      docsLink: '',
      getStartedLink:
        'https://docs.redhat.com/en/documentation/red_hat_openshift_ai_cloud_service/1/html/openshift_ai_tutorial_-_fraud_detection_example/index',
      getStartedMarkDown: '',
      img: '<svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38"><g id="uuid-fb69441b-b57f-4918-99bb-aad41e7175f0"><rect x="1" y="1" width="36" height="36" rx="9" ry="9" stroke-width="0"/><path d="m28,2.25c4.27336,0,7.75,3.47664,7.75,7.75v18c0,4.27336-3.47664,7.75-7.75,7.75H10c-4.27336,0-7.75-3.47664-7.75-7.75V10c0-4.27336,3.47664-7.75,7.75-7.75h18m0-1.25H10C5.02944,1,1,5.02943,1,10v18c0,4.97057,4.02944,9,9,9h18c4.97056,0,9-4.02943,9-9V10c0-4.97057-4.02944-9-9-9h0Z" fill="#4d4d4d" stroke-width="0"/></g><g id="uuid-2ba0340d-2b48-4a88-9260-2cfffdbae283"><path d="m19,29.625c-.10449,0-.20898-.02637-.30371-.07861l-9-5c-.20264-.11279-.32617-.32812-.32129-.56006.00537-.23193.13818-.44189.3457-.54541l2-1c.30859-.15381.68506-.02832.83838.27979.1543.30859.0293.68408-.27979.83838l-.93994.47021,7.66064,4.25586,7.66113-4.25586-.94043-.47021c-.30859-.1543-.43457-.52979-.2793-.83838.1543-.31006.53125-.43262.83789-.27979l2,1c.20801.10352.34082.31348.3457.54541s-.11914.44727-.32129.56006l-9,5c-.09473.05225-.19922.07861-.30371.07861Z" fill="#e00" stroke-width="0"/><path d="m19.15332,21.39404c-.33887-.08643-.6748.11865-.75928.45264-.20068.79443-.79541,1.39893-1.51416,1.54004-1.02734.20117-2.06396-.65674-2.27197-1.53076-.05322-.22607-.05273-.46924.00293-.72266.00659-.03027-.00073-.05914.00134-.08917.00299-.04205.00726-.08258.00183-.1236-.00525-.04016-.01801-.07629-.0307-.11414-.0127-.03827-.02405-.07526-.04382-.11029-.01965-.03497-.04541-.06378-.07141-.09442-.02582-.03052-.04999-.0603-.08167-.08557-.03271-.02625-.07013-.04376-.10822-.06323-.02631-.01343-.04675-.03436-.07556-.04419-.5177-.17749-.97192-.45697-1.35571-.79919.0517.00305.10065.0155.15308.0155,1.44727,0,2.625-1.17773,2.625-2.625,0-.34521-.27979-.625-.625-.625s-.625.27979-.625.625c0,.7583-.6167,1.375-1.375,1.375-.75385,0-1.36646-.6098-1.37366-1.36194-.00006-.00507-.00134-.00995-.00134-.01501-.00586-1.66943,1.32764-3.18848,2.47852-3.38184.29053-.04785.64404-.021.80615.00244.76904.1123,1.32617.51465,1.6582.83252.24902.23926.64404.23096.8833-.01904.23877-.24902.23047-.64453-.01904-.8833-.46338-.44434-1.24561-1.00684-2.34229-1.16748-.10547-.0166-.6582-.08789-1.19336.00244-.06549.01099-.13196.04083-.19788.05688.25311-1.03925,1.18536-1.81567,2.30139-1.81567,1.30957,0,2.375,1.06543,2.375,2.375,0,.02484.01135.04596.01416.07001.00488.04248.01147.08246.02466.12231.01257.03827.02881.07251.04816.10712.01953.0351.0401.06714.06598.09784.026.03094.05432.05682.08582.08221.03064.02478.0614.04639.09668.06519.03741.01996.07605.03339.11743.04553.02295.00677.04156.02136.06567.02551.03558.00623.07062.00903.10571.00916.00024,0,.00049.00012.00073.00012.00012,0,.00018-.00006.00031-.00006.00024,0,.00043.00006.00067.00006.08008,0,.15649-.01776.22833-.04633.02466-.00977.04431-.02618.06732-.03888.04413-.02429.08661-.04926.12378-.08344.02185-.02008.03796-.04382.05676-.06683.02966-.03607.05658-.07257.07776-.11523.01434-.02875.02295-.05872.03278-.08978.00842-.02667.02356-.04968.0285-.07806.26855-1.55762,1.4082-2.48145,2.36133-2.48145h.01562c.75293.00781,1.33008.55762,1.54297.79346.23047.25732.625.27588.88281.04541.25586-.23096.27637-.62646.04492-.88232-.32324-.3584-1.20996-1.19336-2.45703-1.20654h-.03027c-1.1449,0-2.20697.68921-2.89203,1.74573-.63739-1.04224-1.77582-1.74573-3.08453-1.74573-1.99902,0-3.625,1.62598-3.625,3.625,0,.0282.01245.05225.01605.07947-1.1131.8244-2.01984,2.26544-2.01575,3.91888,0,.00061-.00031.00104-.00031.00165,0,.00031.00012.00061.00012.00092,0,.00037-.00012.00067-.00012.00104.00629,1.88336,1.18011,3.58411,2.95685,4.38977-.0105.2558.00208.50848.06024.75281.30664,1.29199,1.62891,2.52344,3.16943,2.52344.18359,0,.37061-.01758.55859-.05469,1.19141-.23389,2.16699-1.19922,2.48535-2.45996.08496-.33447-.11719-.6748-.45215-.75928Z" fill="#fff" stroke-width="0"/><path d="m20.62372,17.14917l.763-1.52417h2.15021c.27264.5885.86511,1,1.55487,1,.94629,0,1.7168-.77002,1.7168-1.7168s-.77051-1.7168-1.7168-1.7168c-.75909,0-1.39758.49884-1.62341,1.18359h-2.46838c-.23633,0-.45312.13379-.55859.3457l-.78668,1.5733c-.17731-.06207-.36475-.1026-.56293-.1026-.94678,0-1.7168.77002-1.7168,1.7168s.77002,1.7168,1.7168,1.7168c.94629,0,1.7168-.77002,1.7168-1.7168,0-.2738-.07037-.52917-.18488-.75903Zm4.46808-2.70776c.25781,0,.4668.20947.4668.4668s-.20898.4668-.4668.4668-.4668-.20947-.4668-.4668.20898-.4668.4668-.4668Zm-6,3.93359c-.25732,0-.4668-.20947-.4668-.4668s.20947-.4668.4668-.4668c.25781,0,.4668.20947.4668.4668s-.20898.4668-.4668.4668Z" fill="#fff" stroke-width="0"/><path d="m25.0918,17.375c-.68976,0-1.28223.4115-1.55487,1h-1.53693c-.34473,0-.625.27979-.625.625v2.53693c-.58838.27258-1,.86481-1,1.55487,0,.94678.77051,1.7168,1.7168,1.7168s1.7168-.77002,1.7168-1.7168c0-.75946-.49902-1.39771-1.18359-1.62347v-1.84332h.84338c.22583.68475.86432,1.18359,1.62341,1.18359.94629,0,1.7168-.77002,1.7168-1.7168s-.77051-1.7168-1.7168-1.7168Zm-3,6.18359c-.25781,0-.4668-.20947-.4668-.4668s.20898-.4668.4668-.4668.4668.20947.4668.4668-.20898.4668-.4668.4668Zm3-4c-.25781,0-.4668-.20947-.4668-.4668s.20898-.4668.4668-.4668.4668.20947.4668.4668-.20898.4668-.4668.4668Z" fill="#fff" stroke-width="0"/></g></svg>',
      hidden: true,
      provider: 'Red Hat',
      quickStart: '',
      shownOnEnabledPage: true,
      isEnabled: true,
    },
  },
];
