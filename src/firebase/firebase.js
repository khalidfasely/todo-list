import * as firebase from 'firebase';
//import { initializeApp } from 'firebase/app';
//import firebase from 'firebase';
//import { database } from 'firebase/firestore/database';
//import { auth } from 'firebase/firestore/auth';
//var firebase = require("firebase");

const firebaseConfig = {
  apiKey:`${import.meta.env.VITE_FIREBASE_API_KEY}`,
  authDomain:`${import.meta.env.VITE_FIREBASE_AUTH_DOMAIN}`,
  databaseURL:`${import.meta.env.VITE_FIREBASE_DATABASE_URL}`,
  projectId:`${import.meta.env.VITE_FIREBASE_PROJECT_ID}`,
  storageBucket:`${import.meta.env.VITE_FIREBASE_STORAGE_BUCKET}`,
  messagingSenderId:`${import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID}`,
  appId:`${import.meta.env.VITE_FIREBASE_APP_ID}`,
  measurementId:`${import.meta.env.VITE_FIREBASE_MEASUREMENT_ID}`
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

//database.ref().set({
//  users: {
//    uid: {
//      iid: {
//        content: 'firebase',
//        time: 'today',
//        active: true,
//        timeOfDeactive: null
//      }
//    }
//  }
//});