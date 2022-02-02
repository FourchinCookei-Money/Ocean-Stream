// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqJ-qSvKBScv-KOcrmcjHl4cdlwlyQ90E",
  authDomain: "ocean-stream-crypto-commerce.firebaseapp.com",
  projectId: "ocean-stream-crypto-commerce",
  storageBucket: "ocean-stream-crypto-commerce.appspot.com",
  messagingSenderId: "607304679910",
  appId: "1:607304679910:web:e9a3f1cbccc643a5629627",
  measurementId: "G-PDHZDPQ25N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);