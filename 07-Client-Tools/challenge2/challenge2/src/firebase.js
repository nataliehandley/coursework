

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

import firebase from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyDv5KvGygfeZEVZ5MM-IWAWJ_0ALAb_k",
  authDomain: "challenge-43bf0.firebaseapp.com",
  projectId: " challenge-43bf0",
  storageBucket: "challenge-43bf0.appspot.com",
  messagingSenderId: "189487308126",
  appId: "1:189487308126:web:54f98b2bd59006af9103cf"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);
export default firebase;

