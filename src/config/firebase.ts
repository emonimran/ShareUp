// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth"
import { getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-_x3BzJFhqqCWz-6bgZZmWsl_0cfcRzM",
  authDomain: "social-media-58a65.firebaseapp.com",
  projectId: "social-media-58a65",
  storageBucket: "social-media-58a65.appspot.com",
  messagingSenderId: "971827997345",
  appId: "1:971827997345:web:8037f5d9d5864a488b9ee0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider(); 
export const db = getFirestore(app);