// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider,FacebookAuthProvider,TwitterAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2pPSdkw8sy_c4zZTTnzw98SFHO2cWBII",
  authDomain: "fir-303b4.firebaseapp.com",
  projectId: "fir-303b4",
  storageBucket: "fir-303b4.appspot.com",
  messagingSenderId: "607591175941",
  appId: "1:607591175941:web:fb2b9cf90c166e5fde896c",
  measurementId: "G-CL6RTBT7HD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const ggprovider = new GoogleAuthProvider()
const fbprovider = new FacebookAuthProvider()
const twprovider = new TwitterAuthProvider()
export {auth,ggprovider,fbprovider,twprovider}