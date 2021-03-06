sap.ui.define([
  "sap/ui/core/UIComponent",
  "com/mrb/UI5-Testing/model/models"
], function(UIComponent, models) {
  "use strict";

  return UIComponent.extend("com.mrb.UI5-Testing.Component", {

    metadata: {
      manifest: "json"
    },

    /**
     * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
     * @public
     * @override
     */
    init: function() {
      // call the base component's init function
      UIComponent.prototype.init.apply(this, arguments);

      // enable routing
      this.getRouter().initialize();

			// allow saving values to the OData model
			this.getModel().setDefaultBindingMode("TwoWay");

      // set the device model
      this.setModel(models.createDeviceModel(), "device");
    }
  });
});
