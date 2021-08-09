import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCOv21KpIBtgkyerEqbuSNPigQuYK3hqq8",
    authDomain: "crown-db-66e8c.firebaseapp.com",
    projectId: "crown-db-66e8c",
    storageBucket: "crown-db-66e8c.appspot.com",
    messagingSenderId: "589623967002",
    appId: "1:589623967002:web:0a5a5789fd1945d32c40a3"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;