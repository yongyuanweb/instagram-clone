import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA40S5P0aFFSYwDJo0uXcFaDbfgRSqtwmY",
  authDomain: "instgram-clone-85644.firebaseapp.com",
  databaseURL: "https://instgram-clone-85644.firebaseio.com",
  projectId: "instgram-clone-85644",
  storageBucket: "instgram-clone-85644.appspot.com",
  messagingSenderId: "143236779854",
  appId: "1:143236779854:web:ce11ba0be9d859c8fe181f",
  measurementId: "G-8JE146ZHZD",
});

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db,auth,storage};