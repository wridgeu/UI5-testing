sap.ui.define([
	"sap/ui/model/SimpleType"
], function (SimpleType) {
	"use strict";
	//Use data types if you need both formatting and parsing of a model value (two way instead of formatting - one way)
	return SimpleType.extend("com.mrb.UI5-Testing.model.FlaggedType", {
		//formats a model value to be displayed in the UI
		formatValue: function () {
		},
		//parses a UI value to be stored in the model
		parseValue: function () {
		},
		//checks a value for displaying validation errors
		validateValue: function () {
		}
	});
});