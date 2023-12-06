sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("mdd07.controller.View2", {
        onInit: function() {
            var oView=this.getView()
            var oModel=sap.ui.getCore().getModel("basemodel1")
            console.log(oModel)
            oView.setModel(oModel,'basemodel')
        
        
   
        }, navto:function(){
         
            console.log('I am pressed');
            var m=sap.ui.getCore().getModel("basemodel").getData()
            debugger
            console.log(m);
            var oRouter=sap.ui.core.UIComponent.getRouterFor(this)
            oRouter.navTo("RouteFlex2")
        },
        onpressfun:function(oEvent){
          console.log('press');
        }
      });
    }
  );
  