// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';


import dynamic from 'next/dynamic'



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVdalGO1_oD1p5Cog8EKQht5yIydwZM_c",
  authDomain: "tacblog-dbd5f.firebaseapp.com",
  projectId: "tacblog-dbd5f",
  storageBucket: "tacblog-dbd5f.appspot.com",
  messagingSenderId: "561410802060",
  appId: "1:561410802060:web:5cc937852cef402120d6a9",
  measurementId: "G-TF4SW6D4GW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider()

// const analytics = getAnalytics(app);