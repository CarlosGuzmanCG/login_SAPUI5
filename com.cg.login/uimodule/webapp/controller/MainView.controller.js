sap.ui.define([
    "./BaseController"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */

    function (Controller) {
        "use strict";

        return Controller.extend("com.cg.login.controller.MainView", {
            onInit: function () {
                sap.ui.getCore().applyTheme("sap_fiori_3_dark");
            }
        });
    });
