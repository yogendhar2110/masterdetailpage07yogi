/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
        "sap/ui/core/UIComponent",
        "sap/ui/Device",
        "mdd07/model/models"
    ],
    function (UIComponent, Device, models) {
        "use strict";

        return UIComponent.extend("mdd07.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                // enable routing
                this.getRouter().initialize();

                // set the device model
                var mode= new sap.ui.model.json.JSONModel()
          mode.loadData("../../sap/opu/odata/sap/C_PURCHASEORDER_FS_SRV/C_PurchaseOrderFs?$top=100",{
            top:100
          }).then(function(data){
           
            sap.ui.getCore().setModel(mode,'basemodel1')
            console.log('ready from comp');
          })
                this.setModel(models.createDeviceModel(), "device");
            }
        });
    }
);