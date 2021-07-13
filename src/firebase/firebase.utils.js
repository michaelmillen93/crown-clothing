import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAGJ-PXW2WC3YHReghdTmFyLj57VCNIGqE",
  authDomain: "crown-db-d1151.firebaseapp.com",
  projectId: "crown-db-d1151",
  storageBucket: "crown-db-d1151.appspot.com",
  messagingSenderId: "142397662862",
  appId: "1:142397662862:web:8053a1cbe48a8088bf4bdf",
  measurementId: "G-7RHCDM162K",
};

export const createUserProfileDocument = async (userAuth, extraData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date(); //Creates new date object that tells us the precise date and time it was invoked

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...extraData,
      });
    } catch (err) {
      console.error("error creating user", err.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

//Exports auth method from firebase
export const auth = firebase.auth();
export const firestore = firebase.firestore();

//TWITTER AUTHENTICATION

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
