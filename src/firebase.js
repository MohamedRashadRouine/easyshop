
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'; // Import getAuth from firebase/auth
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {

    apiKey: "AIzaSyC4UisdZ5phnK57zOLBC3LY_v0VLxpmRwA",
    authDomain: "easyshop-e4396.firebaseapp.com",
    projectId: "easyshop-e4396",
    storageBucket: "easyshop-e4396.appspot.com",
    messagingSenderId: "904688259364",
    appId: "1:904688259364:web:918595cee1f05482cf63b1",
    measurementId: "G-VJ1NTCRSCY"
  };

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp); // Initialize auth
const db = getFirestore(firebaseApp); // Add this line to export db

export { firebaseApp, auth ,db}; // Export both firebaseApp and auth

