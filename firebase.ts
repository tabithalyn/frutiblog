import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "frutiblog-daa66.firebaseapp.com",
  projectId: "frutiblog-daa66",
  storageBucket: "frutiblog-daa66.firebasestorage.app",
  messagingSenderId: "349798729047",
  appId: "1:349798729047:web:390b98fdc7951222deaa12"
};

export const app = initializeApp(firebaseConfig);