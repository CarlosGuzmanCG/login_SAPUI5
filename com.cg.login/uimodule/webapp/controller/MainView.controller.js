sap.ui.define([
    "./BaseController",
    "sap/m/MessageBox"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */

    function (Controller,MessageBox) {
        "use strict";

        return Controller.extend("com.cg.login.controller.MainView", {
            onInit: function () {
                sap.ui.getCore().applyTheme("sap_fiori_3_dark");
            },

            navToSignUp:function(oEvent){
                this.getRouter().navTo("SignUp");
            },

            onPressSignIn: function(){
                const email = this.byId("emailInput").getValue();
                const password = this.byId("pwdInput").getValue();
                const that = this;
                const oFirebaseModel = this.getOwnerComponent().getModel("firebase").getData();
                oFirebaseModel.fireauth.signInWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    MessageBox.success("Success");
                })
                .catch((error) => {
                    MessageBox.error("Error");
                });
            },
            
        }
    
    );
    });
