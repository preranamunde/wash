// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCaJZRVlRSjybG90Ptmsdsgawx52EPA6_Y",
    authDomain: "wash-8aa64.firebaseapp.com",
    projectId: "wash-8aa64",
    storageBucket: "wash-8aa64.firebasestorage.app",
    messagingSenderId: "597676159687",
    appId: "1:597676159687:web:82a9424c15b272707544e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();

export { auth, db };