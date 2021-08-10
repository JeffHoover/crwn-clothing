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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();

    if (!snapshot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set( {
                displayName,
                email,
                createdAt,
                ...additionalData
                }
            )
        }
        catch (error ){
            console.log('error creating user', error.message);
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;