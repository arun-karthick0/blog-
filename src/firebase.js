import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDEgXRfwNmthX49Y8pf7br4u26KkS9CV8I",
  authDomain: "blog-website-32b54.firebaseapp.com",
  projectId: "blog-website-32b54",
  storageBucket: "blog-website-32b54.appspot.com",
  messagingSenderId: "242003831532",
  appId: "1:242003831532:web:312ea78b3679eeb69d93c9",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
