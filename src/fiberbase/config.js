// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyASdc5nkO4CemmGN2JVBcYMlhtisZhCe-k",

  authDomain: "nasirgallery-4c402.firebaseapp.com",

  projectId: "nasirgallery-4c402",

  storageBucket: "nasirgallery-4c402.appspot.com",

  messagingSenderId: "337267704170",

  appId: "1:337267704170:web:270886bc36a474f5e3e513"

};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const storage = getStorage(app)

export{db, storage}