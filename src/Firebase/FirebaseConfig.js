// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJKLBKX0-h8URP0vstAeHAlgTKWczeWrM",
  authDomain: "musicwebsite-88511.firebaseapp.com",
  projectId: "musicwebsite-88511",
  storageBucket: "musicwebsite-88511.appspot.com",
  messagingSenderId: "160174769852",
  appId: "1:160174769852:web:af5a594e32301890ebb2b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const FIREBASE_AUTH = getAuth(app);
export const FIRESTORE_DB = getFirestore(app);
