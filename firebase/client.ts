import { initializeApp, getApp, getApps } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCScKlm_5TUoJhRG-xfcVMvlgDXBNR3Zpo",
  authDomain: "entrevistai-89326.firebaseapp.com",
  projectId: "entrevistai-89326",
  storageBucket: "entrevistai-89326.firebasestorage.app",
  messagingSenderId: "765881189560",
  appId: "1:765881189560:web:2b5d83f93e0bda3a66604d",
  measurementId: "G-2T1B9GFYSH"
};


const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);