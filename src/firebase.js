import * as firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCbrfjr_CQ9IsBsJJi8PXlGCLNERAf0sHY",
    authDomain: "testing-with-firebase-5e579.firebaseapp.com",
    databaseURL: "https://testing-with-firebase-5e579.firebaseio.com",
    projectId: "testing-with-firebase-5e579",
    storageBucket: "testing-with-firebase-5e579.appspot.com",
    messagingSenderId: "29678006692",
    appId: "1:29678006692:web:0fac7308e3c3aefcc75131",
    measurementId: "G-9CBHSZYL2Y"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
 