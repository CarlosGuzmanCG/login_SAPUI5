sap.ui.define(["com/cg/login/controller/BaseController"], function (Controller) {
    "use strict";

    return Controller.extend("com.cg.login.controller.SignUp", {

        onInit(){
            sap.ui.getCore().applyTheme("sap_fiori_3_dark");
            const oUserModel = this.getOwnerComponent().getModel("userDetails"); //get model

            const oDetails = { //json
                name: "carlos",
                email: "carlos@gmail.com",
                password: "test01",
                cnfPassword: "test01"
            }

            oUserModel.setProperty("/signUpDetails", oDetails); //set model

        },

        onPressSignIn:function(oEvent){
            debugger;
        },

        navToSignIn: function(){
            this.getRouter().navTo("RouteMainView",{}, {}, true);
        }
    });
});
