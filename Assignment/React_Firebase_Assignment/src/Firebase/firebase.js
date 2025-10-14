// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDBVd7opWmVVIAXOWKSsQUG9jmX4rNRx4w",
  authDomain: "product-5c40d.firebaseapp.com",
  projectId: "product-5c40d",
  storageBucket: "product-5c40d.firebasestorage.app",
  messagingSenderId: "852243675463",
  appId: "1:852243675463:web:1030a651ca24f1212b7462",
  measurementId: "G-7J2M1HMEMC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const fireDb = getFirestore(app)