sap.ui.define([
    "sap/ui/core/Control",
    "sap/m/Button"
 ], function(Control,Button) {
    "use strict";
 
    return Control.extend("mdd07.control.card", {
       metadata: {
          aggregations: {
             items: { type: "sap.ui.core.Control", multiple: true, singularName: "item" }
          },
          properties:{
            'comname':"moye moye",
            'client':''
          },
          events:{
            "press":{},
            
           
          }
       },
       renderer: function(oRm, Control) {
        
         oRm.write('<div ')
         // oRm.addStyle('padding',"2%")
         // oRm.addStyle('margin',"5%")
         oRm.addStyle('display',"flex")
         oRm.addStyle('width',"200px");
         oRm.addStyle('margin',"8px");
         oRm.addStyle('height',"250px")
         oRm.addStyle('flex-wrap',"wrap")
         oRm.addStyle('border-radius',"15px")
         oRm.addStyle('justify-content',"space-around")
         oRm.addStyle('background-color',"#f7f7f9")
     
     
         oRm.addStyle('text-align',"center")
         oRm.addStyle('box-shadow'," 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)")
         oRm.writeStyles()
         oRm.write('<center><img ')
         oRm.addStyle('margin-top',"2%")
         oRm.writeStyles()
         oRm.write(' src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" width="100px" ></center>  <br>     <b>'+Control.mProperties.comname+'</b><br>'+Control.mProperties.client+'</div>')
       
     
    

       },
       onmouseover:function(){
        console.log('fir');
        this.firePress()
       }
       ,
       _onMouseOver: function() {
        
        this.addStyle("border","2px solid green");
     },

     _onMouseOut: function() {
        // Remove the CSS class for the hover effect
        this.removeStyles("border","2px solid grey");
     },
       onPress:function(){
        console.log('jj');
        this.onpressfunt()
       }
    });
 });
 