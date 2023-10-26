import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDMHb7eMOEutF41OTPQA9OMAOcDu-ZYLDA",
  authDomain: "noteballs-fb907.firebaseapp.com",
  projectId: "noteballs-fb907",
  storageBucket: "noteballs-fb907.appspot.com",
  messagingSenderId: "799842719201",
  appId: "1:799842719201:web:c1dafb44a6573320bb2ea0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {
  db,
  auth
}





