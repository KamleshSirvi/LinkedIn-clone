// import firebase from 'firebase';
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/database"
import "firebase/compat/storage"
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDaBOWx-h3umICAktREvWPjuOeI2QVzo_g",
    authDomain: "linkedin-clone-ab8ea.firebaseapp.com",
    projectId: "linkedin-clone-ab8ea",
    storageBucket: "linkedin-clone-ab8ea.appspot.com",
    messagingSenderId: "47290851342",
    appId: "1:47290851342:web:05aa10df2b3150d372dc5f"
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