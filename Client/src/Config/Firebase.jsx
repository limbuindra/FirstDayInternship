// import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
// import { getFirestore, collection, addDoc, query, orderBy, onSnapshot } from "firebase/firestore";

// const firebaseConfig = {
//     apiKey: "AIzaSyCra39HVlS0jp7DtjQNQPy248Y7vFSweH8",
//     authDomain: "chatapp-f076f.firebaseapp.com",
//     projectId: "chatapp-f076f",
//     storageBucket: "chatapp-f076f.firebasestorage.app",
//     messagingSenderId: "427594298916",
//     appId: "1:427594298916:web:24fbc2afaa15e5fac38ab1"
//   };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app);
// const provider = new GoogleAuthProvider();

// export { auth, provider, signInWithPopup, signOut, db, collection, addDoc, query, orderBy, onSnapshot };

import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword,createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCra39HVlS0jp7DtjQNQPy248Y7vFSweH8",
    authDomain: "chatapp-f076f.firebaseapp.com",
    projectId: "chatapp-f076f",
    storageBucket: "chatapp-f076f.firebasestorage.app",
    messagingSenderId: "427594298916",
    appId: "1:427594298916:web:24fbc2afaa15e5fac38ab1"
  };
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, signInWithEmailAndPassword,createUserWithEmailAndPassword };
