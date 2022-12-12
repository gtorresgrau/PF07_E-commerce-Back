// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBv6hjyHp54NUN_a-gY73FMOnUWKZP3MVU",
  authDomain: "henrysneakers-2022.firebaseapp.com",
  projectId: "henrysneakers-2022",
  storageBucket: "henrysneakers-2022.appspot.com",
  messagingSenderId: "305138550965",
  appId: "1:305138550965:web:ffe8764f761b68f65696fc",
  measurementId: "G-VY519148LZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


var admin = require("firebase-admin");

var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


