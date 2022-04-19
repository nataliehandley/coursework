

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

import firebase from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyDaQFNN7wbbLR7THhLvR3tt0jv8i7JyIS8",
    authDomain: "mazinapp-857e4.firebaseapp.com",
    projectId: "mazinapp-857e4",
    storageBucket: "mazinapp-857e4.appspot.com",
    messagingSenderId: "583019744071",
    appId: "1:583019744071:web:a9f6f155d16baf953f9a62"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);
export default firebase;







