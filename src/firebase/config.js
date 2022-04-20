// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

    apiKey: "AIzaSyAQUsUe4K9gXebmHdRUnih3-2h-roHJV0o",

    authDomain: "kutun-ac2a4.firebaseapp.com",

    projectId: "kutun-ac2a4",

    storageBucket: "kutun-ac2a4.appspot.com",

    messagingSenderId: "591246783910",

    appId: "1:591246783910:web:c46716ee5adec674038b67"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)