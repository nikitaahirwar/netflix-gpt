// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzr1HQVRgCqoDKoYghwJ98OG2P0TTAdQ4",
  authDomain: "netflixgpt-cfd1a.firebaseapp.com",
  projectId: "netflixgpt-cfd1a",
  storageBucket: "netflixgpt-cfd1a.firebasestorage.app",
  messagingSenderId: "212378022747",
  appId: "1:212378022747:web:a0cb98b704ac21ee70e07e",
  measurementId: "G-C793SJRGP7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
