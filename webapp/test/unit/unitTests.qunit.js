/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/mrb/UI5-Testing/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});