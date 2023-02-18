import { initializeApp } from "firebase/app";
import {
  getAuth
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBsyp6e8Eyh-O_40CGjI4w4PliQt2eStfg",
  authDomain: "food-app-e6f3c.firebaseapp.com",
  projectId: "food-app-e6f3c",
  storageBucket: "food-app-e6f3c.appspot.com",
  messagingSenderId: "975114832720",
  appId: "1:975114832720:web:418c5d1fb04b34de583a55",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
export default app;
