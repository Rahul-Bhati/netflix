// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBTxDaa9R5PPJdc1thSfoGix2uLsZb3Uvc",
    authDomain: "netflix-a06cd.firebaseapp.com",
    projectId: "netflix-a06cd",
    storageBucket: "netflix-a06cd.appspot.com",
    messagingSenderId: "723647198160",
    appId: "1:723647198160:web:6ed2b1bbdc121894c2bfd5",
    measurementId: "G-GG16444WHC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();