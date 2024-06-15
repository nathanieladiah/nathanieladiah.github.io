import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAoWt2Il3lYQ_xHIT-9MhOQfiaGTbNJFok",
  authDomain: "portfolio-28012.firebaseapp.com",
  projectId: "portfolio-28012",
  storageBucket: "portfolio-28012.appspot.com",
  messagingSenderId: "622313582409",
  appId: "1:622313582409:web:bdcbac150e60a065c77498",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
