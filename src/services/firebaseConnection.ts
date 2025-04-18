// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxuRpBIfYx51ZPxux2JoBEbOba0fUZbIA",
  authDomain: "webcarros-d1e62.firebaseapp.com",
  projectId: "webcarros-d1e62",
  storageBucket: "webcarros-d1e62.firebasestorage.app",
  messagingSenderId: "249932633594",
  appId: "1:249932633594:web:3c49ab9390445ab7818043"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };