import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyASRIHQ8wHMkW4yk1QiKvg86StyupPngcA",
  authDomain: "readinglistapp-e1cda.firebaseapp.com",
  projectId: "readinglistapp-e1cda",
  storageBucket: "readinglistapp-e1cda.appspot.com",
  messagingSenderId: "139337837347",
  appId: "1:139337837347:web:d4c978357c206805c73a96",
};

//initialize firebase
initializeApp(firebaseConfig);

//initialize firestore
const db = getFirestore();

//initialize firebase auth
const auth = getAuth();

export { db, auth };
