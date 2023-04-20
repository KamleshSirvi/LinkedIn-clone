// import firebase from 'firebase';
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/database"
import "firebase/compat/storage"
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBZ0lOUR2Zmp-2kI5l4QbaK051jMneaS9Q",
  authDomain: "linkedinclone-3c80e.firebaseapp.com",
  projectId: "linkedinclone-3c80e",
  storageBucket: "linkedinclone-3c80e.appspot.com",
  messagingSenderId: "835946207396",
  appId: "1:835946207396:web:4e9425b6efd86ea15f2e31"
};

//   initialize firebase app
const firebaseApp = firebase.initializeApp(firebaseConfig);
// for database
const db = firebaseApp.firestore();
// for authentication
const auth = firebase.auth();
// auth provider
const provider = new firebase.auth.GoogleAuthProvider();  
// for storing images and other files
const storage = firebase.storage();

export {auth, provider, storage};
export default db;