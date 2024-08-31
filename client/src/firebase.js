// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "riyal-estate.firebaseapp.com",
  projectId: "riyal-estate",
  storageBucket: "riyal-estate.appspot.com",
  messagingSenderId: "453088768022",
  appId: "1:453088768022:web:d14007c0d8851c2f6e0537"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);