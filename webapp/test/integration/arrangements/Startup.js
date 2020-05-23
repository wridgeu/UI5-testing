sap.ui.define([
	"sap/ui/test/Opa5",
	"com/mrb/UI5-Testing/localService/mockserver",
	"sap/ui/model/odata/v2/ODataModel"
], function(Opa5, mockserver, ODataModel) {
	"use strict";

	return Opa5.extend("com.mrb.UI5-Testing.test.integration.arrangements.Startup", {

		iStartMyApp: function (oOptionsParameter) {
			var oOptions = oOptionsParameter || {};

			this._clearSharedData();

			// start the app with a minimal delay to make tests fast but still async to discover basic timing issues
			oOptions.delay = oOptions.delay || 50;

			// configure mock server with the current options
			var oMockserverInitialized = mockserver.init(oOptions);

			this.iWaitForPromise(oMockserverInitialized);
			// start the app UI component
			this.iStartMyUIComponent({
				componentConfig: {
					name: "com.mrb.UI5-Testing",
					async: true
				},
				hash: oOptions.hash,
				autoWait: oOptions.autoWait
			});
		},

		_clearSharedData: function () {
			// clear shared metadata in ODataModel to allow tests for loading the metadata
			ODataModel.mSharedData = { server: {}, service: {}, meta: {} };
		}
	});
});
