import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD5TLjBQGqfuqln6c2Uz7dNLOG4CLgRD5c",
  authDomain: "moviz-app-1bec8.firebaseapp.com",
  projectId: "moviz-app-1bec8",
  storageBucket: "moviz-app-1bec8.appspot.com",
  messagingSenderId: "1084946350869",
  appId: "1:1084946350869:web:fe72ca2fea5a64b6ecdf1c",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
