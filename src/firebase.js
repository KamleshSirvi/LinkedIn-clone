// import firebase from 'firebase';
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/database"
import "firebase/compat/storage"
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDWla_JMWiI7e5rSQ6aLsmQ6LYwYpvAaSQ",
  authDomain: "linkedin-clone-5d2b8.firebaseapp.com",
  projectId: "linkedin-clone-5d2b8",
  storageBucket: "linkedin-clone-5d2b8.appspot.com",
  messagingSenderId: "54627965927",
  appId: "1:54627965927:web:2d2e6df8f790beef877b42"
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