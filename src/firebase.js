// import firebase from 'firebase';
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/database"
import "firebase/compat/storage"
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCm5CodnNfxHog_yvIIdgEjaExb3CYFg4c",
  authDomain: "linkedin-clone-c3e82.firebaseapp.com",
  projectId: "linkedin-clone-c3e82",
  storageBucket: "linkedin-clone-c3e82.appspot.com",
  messagingSenderId: "1057820659576",
  appId: "1:1057820659576:web:b3fcaf00a136607e45028d"
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