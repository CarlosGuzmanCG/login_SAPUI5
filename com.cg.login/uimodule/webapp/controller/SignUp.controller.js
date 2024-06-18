sap.ui.define(["com/cg/login/controller/BaseController"], function (Controller) {
    "use strict";

    return Controller.extend("com.cg.login.controller.SignUp", {
        onInit(){
            sap.ui.getCore().applyTheme("sap_fiori_3_dark");
        },

        navToSignIn: function(){
            this.getRouter().navTo("RouteMainView",{}, {}, true);
        }
    });
});
