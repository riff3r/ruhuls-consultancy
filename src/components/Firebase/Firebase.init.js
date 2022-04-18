// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClfBlsm6fVXsZp_HOc8C6_UT9MTzJOGEc",
  authDomain: "homefoodie-12980.firebaseapp.com",
  projectId: "homefoodie-12980",
  storageBucket: "homefoodie-12980.appspot.com",
  messagingSenderId: "94615545165",
  appId: "1:94615545165:web:3f965fcddfe208f2d80304",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
