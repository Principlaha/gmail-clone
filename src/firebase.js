import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBD-Ztie2yLp2Bgid7Vm3BAq-Q2r7rtWCo",
    authDomain: "clone-3dc11.firebaseapp.com",
    projectId: "clone-3dc11",
    storageBucket: "clone-3dc11.appspot.com",
    messagingSenderId: "792175337382",
    appId: "1:792175337382:web:960a8a1cde4eaee296b967",
    measurementId: "G-YY36D9JBQQ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider };