import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAebFHc575XDILwfXG5R0mj5mv_n4FvkZo",
  authDomain: "todo-list-14b94.firebaseapp.com",
  databaseURL: "https://todo-list-14b94-default-rtdb.firebaseio.com",
  projectId: "todo-list-14b94",
  storageBucket: "todo-list-14b94.appspot.com",
  messagingSenderId: "543950948611",
  appId: "1:543950948611:web:27020e54e2c89c0bed8136",
  measurementId: "G-5Z35QSVTGD"
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