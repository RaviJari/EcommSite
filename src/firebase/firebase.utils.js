import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDds0VAEv9hUmo6wOnR2bMG-EMSjIbaKaY",
  authDomain: "rdj-clothing-db.firebaseapp.com",
  projectId: "rdj-clothing-db",
  storageBucket: "rdj-clothing-db.appspot.com",
  messagingSenderId: "937711489732",
  appId: "1:937711489732:web:8f1cd7ddb831e584fe6f91",
  measurementId: "G-3YKY79HKE8",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
 
export const signInWithGoogle =() => auth.signInWithPopup(provider);

export default firebase;