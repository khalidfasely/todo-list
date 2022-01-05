// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAebFHc575XDILwfXG5R0mj5mv_n4FvkZo",
  authDomain: "todo-list-14b94.firebaseapp.com",
  projectId: "todo-list-14b94",
  storageBucket: "todo-list-14b94.appspot.com",
  messagingSenderId: "543950948611",
  appId: "1:543950948611:web:27020e54e2c89c0bed8136",
  measurementId: "G-5Z35QSVTGD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);