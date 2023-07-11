// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVyu__-mXIhTVrs_maSzy-GjYWvzZLmEc",
  authDomain: "github-users-website.firebaseapp.com",
  projectId: "github-users-website",
  storageBucket: "github-users-website.appspot.com",
  messagingSenderId: "837814376888",
  appId: "1:837814376888:web:47b6e19d0d7e685d41574d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app)