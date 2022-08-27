import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore'

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

export default db;

