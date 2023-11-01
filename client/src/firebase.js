// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-27e00.firebaseapp.com",
  projectId: "real-estate-27e00",
  storageBucket: "real-estate-27e00.appspot.com",
  messagingSenderId: "671196442735",
  appId: "1:671196442735:web:412d935d3c91d474dd1d9a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);