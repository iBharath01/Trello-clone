import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_REACT_APP_FIREBASE_KEY,
  authDomain: "trello-clone-45ca2.firebaseapp.com",
  projectId: "trello-clone-45ca2",
  storageBucket: "trello-clone-45ca2.appspot.com",
  messagingSenderId: "43775152671",
  appId: "1:43775152671:web:647c1d5ba35533ab50bb2a"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);