import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const requiredFirebaseEnvVars = [
  "VUE_APP_FIREBASE_API_KEY",
  "VUE_APP_FIREBASE_AUTH_DOMAIN",
  "VUE_APP_FIREBASE_PROJECT_ID",
  "VUE_APP_FIREBASE_STORAGE_BUCKET",
  "VUE_APP_FIREBASE_MESSAGING_SENDER_ID",
  "VUE_APP_FIREBASE_APP_ID",
];

const missingFirebaseEnvVars = requiredFirebaseEnvVars.filter(
  (envVar) => !process.env[envVar]
);

if (missingFirebaseEnvVars.length) {
  throw new Error(
    `Missing Firebase env vars: ${missingFirebaseEnvVars.join(", ")}`
  );
}

const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {
  db,
  auth
}
