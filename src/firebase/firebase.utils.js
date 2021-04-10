import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { batch } from "react-redux";

const config = {
  apiKey: "AIzaSyDds0VAEv9hUmo6wOnR2bMG-EMSjIbaKaY",
  authDomain: "rdj-clothing-db.firebaseapp.com",
  projectId: "rdj-clothing-db",
  storageBucket: "rdj-clothing-db.appspot.com",
  messagingSenderId: "937711489732",
  appId: "1:937711489732:web:8f1cd7ddb831e584fe6f91",
  measurementId: "G-3YKY79HKE8",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`/users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);
  console.log(collectionRef);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });
  return await batch.commit();
};

export const convertCollectionSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((accumulator,collections)=>{
    accumulator[collections.title.toLowerCase()]=collections;
    return accumulator;
  },{});
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
