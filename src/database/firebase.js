// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth } from 'firebase/auth';
import "firebase/database";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBM9sFvH73Yo30XSR5ZrSEFzPdO4MpQoeM",
  authDomain: "mstore-6d526.firebaseapp.com",
  projectId: "mstore-6d526",
  storageBucket: "mstore-6d526.appspot.com",
  messagingSenderId: "427345882432",
  appId: "1:427345882432:web:a744faf350b42e4ebe5ea5",
  measurementId: "G-SR1ZWSJQS6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getDatabase(app);
export const auth = getAuth(app);
