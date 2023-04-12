// import firebase from 'firebase';
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/database"
import "firebase/compat/storage"
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAfzXXFENMY7qQRCN6N9IkshOxODY_vnHI",
  authDomain: "linkedin-clone-bcf87.firebaseapp.com",
  projectId: "linkedin-clone-bcf87",
  storageBucket: "linkedin-clone-bcf87.appspot.com",
  messagingSenderId: "876074544376",
  appId: "1:876074544376:web:b24d8391ee3a91139f5f0d"
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