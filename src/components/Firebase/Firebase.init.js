// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIHccxQUp0V-w-bhIzLQE74mE_JwzU9nE",
  authDomain: "ruhul-s-consultancy.firebaseapp.com",
  projectId: "ruhul-s-consultancy",
  storageBucket: "ruhul-s-consultancy.appspot.com",
  messagingSenderId: "689301742535",
  appId: "1:689301742535:web:1020aecc026a735c0d2fe2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
