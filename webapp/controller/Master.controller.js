sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("mdd07.controller.Master", {
        onInit: function() {
            console.log("Master Controller loaded");
        }
      });
    }
  );
  