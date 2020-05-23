sap.ui.define(["sap/ui/model/SimpleType"], function (SimpleType) {
  "use strict";
  //Use data types if you need both formatting and parsing of a model value (two way instead of formatting - one way)
  return SimpleType.extend("com.mrb.UI5-Testing.model.FlaggedType", {
    /**
     * Formats the integer value from the model to a boolean for the pressed state of the flagged button
     * General: "formats a model value to be displayed in the UI"
     * @public
     * @param {number} iFlagged the integer value of the formatted property
     * @returns {boolean} 1 means true, all other numbers means false
     */
    formatValue: function (iFlagged) {
      return iFlagged === 1;
    },
    /**
     * Parses a boolean value from the property to an integer
     * General: "parses a UI value to be stored in the model"
     * @public
     * @param {boolean} bFlagged true means flagged, false means not flagged
     * @returns {number} true means 1 , false means 0
     */
    parseValue: function (bFlagged) {
      if (bFlagged) {
        return 1;
      }
      return 0;
    },
    /**
     * Validates the value to be parsed
     * General: checks a value for displaying validation errors
     * @public
     * Since there is only true and false, no client side validation is required
     * @returns {boolean} true
     */
    validateValue: function () {
      return true;
    },
  });
});
