sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("mdd07.controller.App", {
        onInit: function() {
          var mode= new sap.ui.model.json.JSONModel()
          mode.loadData("../../sap/opu/odata/sap/C_PURCHASEORDER_FS_SRV/C_PurchaseOrderFs?$top=100",{
            top:100
          }).then(function(data){
           
            sap.ui.getCore().setModel(mode,'basemodel')
            console.log('ready');
          })
        }
      });
    }
  );
  