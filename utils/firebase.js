import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");

const firebaseConfig = {
  apiKey: "AIzaSyDVJHEak-MECzDD6r0ZwWg1BGbYevSFuS4",
  authDomain: "hablalo-app.firebaseapp.com",
  projectId: "hablalo-app",
  storageBucket: "hablalo-app.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:1234567890",
  measurementId: "G-1234567890",
};

admin.initializeApp({
  credential: admin.credential.cert({
    serviceAccount,
  }),
  databaseURL: "https://hablalo-app.firebaseio.com",
});

export const db = admin.firestore();
