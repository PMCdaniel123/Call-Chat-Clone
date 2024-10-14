import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBS4rHAeSzCLUv3Ea6vOZwGifC-8otUJvA",
  authDomain: "call-chat-project.firebaseapp.com",
  projectId: "call-chat-project",
  storageBucket: "call-chat-project.appspot.com",
  messagingSenderId: "600976386748",
  appId: "1:600976386748:web:e3be416213e6446665beb9",
  measurementId: "G-9VP7CTZSQX",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
