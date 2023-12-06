sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("mdd07.controller.View1", {
        onInit: function() {
            console.log("View 1 Controller loaded");
        }
        ,
        navto:function(){
          alert("")
            console.log('I am pressed');
            var oRouter=sap.ui.core.UIComponent.getRouterFor(this)
            oRouter.navTo("RouteFlex")
        }
      });
    }
  );
  