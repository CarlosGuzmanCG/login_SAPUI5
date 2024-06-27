sap.ui.define([
    "com/cg/login/controller/BaseController",
    "sap/m/MessageBox"
], function (Controller,MessageBox) {
    "use strict";

    return Controller.extend("com.cg.login.controller.SignUp", {

        onInit(){
            sap.ui.getCore().applyTheme("sap_fiori_3_dark");
            const oUserModel = this.getOwnerComponent().getModel("userDetails"); //get model

            const oDetails = { //json
                name: "",
                email: "",
                password: "",
                cnfPassword: ""
            }

            oUserModel.setProperty("/signUpDetails", oDetails); //set model

        },

        onPressSignIn:function(oEvent){
           const oUserModel = this.getOwnerComponent().getModel("userDetails"); //get model
           const oDetails = oUserModel.getProperty("/signUpDetails"); //get json
           const that = this; //get controller
           const user = {
            name: oDetails.name,
            email: oDetails.email,
           }

           const oFirebaseModel = this.getOwnerComponent().getModel("firebase").getData(); // get data from model firebase
           oFirebaseModel.fireauth.createUserWithEmailAndPassword(oDetails.email, oDetails.password)
            .then((userCredential) => {
                that._postToUserDetails(user,userCredential.user.uid);
                MessageBox.success("Account created successfully!");
          })
          .catch((error) => {
                MessageBox.error(error.message);
          });
           
        },

        _postToUserDetails: function(user,uid){
            const oFirebaseModelData = this.getOwnerComponent().getModel("firebase").getData(); // get data from model firebase
            oFirebaseModelData.firestore.collection("user_details").doc(uid).set(user); //add data to firestore
        },

        navToSignIn: function(){
            this.getRouter().navTo("RouteMainView",{}, {}, true);
        }
    });
});
