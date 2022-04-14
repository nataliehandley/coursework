// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getFirestore, collection, addDoc, getDocs} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVlkmtMHjyzK4AqVhrZmOwd-o77m7Sfmo",
  authDomain: "fir-testnatalie-c8e15.firebaseapp.com",
  projectId: "fir-testnatalie-c8e15",
  storageBucket: "fir-testnatalie-c8e15.appspot.com",
  messagingSenderId: "357645035790",
  appId: "1:357645035790:web:1c362a1d299b8c80b1cf5f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//1. Get access to Firestore functionality
const firestore = getFirestore(app);

//2. Export that functionaility so other components can use it
export {firestore}