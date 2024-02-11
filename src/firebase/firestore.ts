import { initializeApp } from "firebase/app";
import { getFirestore, initializeFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.FIRESTORE_API_KEY,
  authDomain: process.env.AUTHDOMAIN,
  projectId: process.env.PROECTID,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.SENDERID,
  appId: process.env.APPID,
  measurementId: process.env.MEASUREMENTID,
};

const firebase = initializeApp(firebaseConfig);
const firestore = initializeFirestore(firebase, {
  experimentalForceLongPolling: true, 
});

export { firestore };
