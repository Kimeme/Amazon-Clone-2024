import firebase from "firebase/compat/app";
// For authentication
import { getAuth } from "firebase/auth"
import "firebase/compat/firestore"
import "firebase/compat/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHbh5vwLD3FbfrhU64ydYDp4UiH6S3F9o",
  authDomain: "clone-ed596.firebaseapp.com",
  projectId: "clone-ed596",
  storageBucket: "clone-ed596.firebasestorage.app",
  messagingSenderId: "424467370323",
  appId: "1:424467370323:web:ab21d43ec1848833e451a6",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db= app.firestore()
