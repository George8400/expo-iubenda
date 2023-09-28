package expo.modules.iubenda

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class ExpoIubendaModule : Module() {

  override fun definition() = ModuleDefinition {

    IubendaCMPConfig config = IubendaCMPConfig.builder()
        .gdprEnabled(true)
        .siteId("12341234")
        .cookiePolicyId("56785678")
        .googleAds(true)
        .cssResource(R.raw.custom_style)
        .jsonResource(R.raw.config_json)
        .applyStyles(true)
        .build();

    Name("ExpoIubenda")

    // Defines a JavaScript synchronous function that runs the native code on the JavaScript thread.
    Function("onCreate") {

        IubendaCMP.initialize(this, config);
    }

  }
}
