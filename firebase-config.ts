// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
    
const firebaseConfig = {
  apiKey: "AIzaSyCasnb3KOOXkDUyc1HK3px8YTOorYAM_tI",
  authDomain: "recipeblog-7412e.firebaseapp.com",
  projectId: "recipeblog-7412e",
  storageBucket: "recipeblog-7412e.appspot.com",
  messagingSenderId: "133438738605",
  appId: "1:133438738605:web:38750f468d5d238d0a7624",
  measurementId: "G-WT21TLYC8B"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);