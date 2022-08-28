import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    signOut,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
} from "firebase/auth";
import{
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc,
} from "firebase/firestore";

import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyACNE2mw1ZHLOv97hukGyndA_f6AweD8fI",
    authDomain: "jomdoc-b24b0.firebaseapp.com",
    projectId: "jomdoc-b24b0",
    storageBucket: "jomdoc-b24b0.appspot.com",
    messagingSenderId: "399208957726",
    appId: "1:399208957726:web:0faac3dbcbbcf1d06e6b0f",
    measurementId: "G-FJBN97QEJT"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logInWithEmailAndPassword = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const registerWithEmailAndPassword = async (name, email, password) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name,
        authProvider: "local",
        email,
      });
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
};

const logout = () => {
    signOut(auth);
};

const sendPasswordReset = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset link sent!");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
};

export default db;
    
export { auth, signInWithGoogle, logInWithEmailAndPassword, logout, registerWithEmailAndPassword, sendPasswordReset };

