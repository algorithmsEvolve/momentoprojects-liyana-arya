// src/firebaseConfig.js
import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDLabJbLGb8A7DOdsyn3LEEwnTvN2GJ23c",
    authDomain: "liyana-arya-wedding.firebaseapp.com",
    projectId: "liyana-arya-wedding",
    storageBucket: "liyana-arya-wedding.appspot.com",
    messagingSenderId: "278667688228",
    appId: "1:278667688228:web:a0fe70f80572ba33179bb1"
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);