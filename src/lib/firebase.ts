import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD36P8H77B74HNSc3_-LCR9eW2wzAhvIRg",
  authDomain: "data101-38b1c.firebaseapp.com",
  projectId: "data101-38b1c",
  storageBucket: "data101-38b1c.firebasestorage.app",
  messagingSenderId: "467168295268",
  appId: "1:467168295268:web:634fe5b151489668926271",
  measurementId: "G-130P1QR45W",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore;
export const dbService = firebase.firestore();
export { firebase };
