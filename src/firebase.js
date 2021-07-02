import firebase from 'firebase';
const firebaseApp = firebase.initializeApp({
  apiKey: "***",
  authDomain: "***",
  projectId: "***",
  storageBucket: "***",
  messagingSenderId: "***",
  appId: "***",
  measurementId: "***"
});

const db = firebase.firestore();

const auth = firebase.auth();
export { db, auth };
