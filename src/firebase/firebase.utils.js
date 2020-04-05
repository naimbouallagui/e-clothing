import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBAS7ZqCimK2tIaeaqV20YA2hecVg6gkeA",
  authDomain: "e-clothing-db-e9da5.firebaseapp.com",
  databaseURL: "https://e-clothing-db-e9da5.firebaseio.com",
  projectId: "e-clothing-db-e9da5",
  storageBucket: "e-clothing-db-e9da5.appspot.com",
  messagingSenderId: "393320783660",
  appId: "1:393320783660:web:4822a9e1e747806baa9689",
  measurementId: "G-K4ZLNBGLPG",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
