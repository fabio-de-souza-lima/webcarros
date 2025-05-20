// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage'


import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaRZ9OGJ4Tp_3alyMXixfyvy7yxUD2q4w",
  authDomain: "webcarros-16ca3.firebaseapp.com",
  projectId: "webcarros-16ca3",
  storageBucket: "webcarros-16ca3.firebasestorage.app",
  messagingSenderId: "422648735620",
  appId: "1:422648735620:web:83077d4b0df29029f3dfd1",
  measurementId: "G-WWPTQ2P49Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app)
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };