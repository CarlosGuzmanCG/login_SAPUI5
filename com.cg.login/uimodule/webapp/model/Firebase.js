sap.ui.define([
    "sap/ui/model/json/JSONModel"
], function(JSONModel) {
    'use strict';
    
    //Configuration from FireBase

    const firebaseConfig = {

        apiKey: "AIzaSyB4fybp7CmtiVTJQs9qVOOVzksX_1LEDD0",
      
        authDomain: "fireui5-login.firebaseapp.com",
      
        projectId: "fireui5-login",
      
        storageBucket: "fireui5-login.appspot.com",
      
        messagingSenderId: "779388665198",
      
        appId: "1:779388665198:web:e74ab10aca4900dc39957f"
      
      };
      
      return{

        initializeFirebase: function(){

            firebase.initializeApp(firebaseConfig);

            const firestore = firebase.firestore();
            const fireauth  = firebase.auth();

            const oFirebase = {
                firestore: firestore,
                fireauth: fireauth
            }

            const fbModel = new JSONModel(oFirebase);

            return fbModel;

        }

    }

});