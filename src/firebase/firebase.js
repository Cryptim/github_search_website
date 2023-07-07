import { GoogleAuthProvider,signInWithPopup,signInWithRedirect,signOut,onAuthStateChanged } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCsHNnG0m_9cRANPa_i43emnJi250fjNzU",
  authDomain: "github-users-92961.firebaseapp.com",
  projectId: "github-users-92961",
  storageBucket: "github-users-92961.appspot.com",
  messagingSenderId: "564853416549",
  appId: "1:564853416549:web:95bffbdd52f9e346d3dc8c"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();


  

