// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-p4MYxkIWAzWtnL3YNez_rrldWDdAVr8",
  authDomain: "blog-post-23646.firebaseapp.com",
  projectId: "blog-post-23646",
  storageBucket: "blog-post-23646.appspot.com",
  messagingSenderId: "755485819992",
  appId: "1:755485819992:web:826efc2c1db2f105df762d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
