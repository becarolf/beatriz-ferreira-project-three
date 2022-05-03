// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAuK0Ffwq3c8d-Jk5RF1AxhrfZEAuaikw",
  authDomain: "guess-the-song-505c0.firebaseapp.com",
  databaseURL: "https://guess-the-song-505c0-default-rtdb.firebaseio.com",
  projectId: "guess-the-song-505c0",
  storageBucket: "guess-the-song-505c0.appspot.com",
  messagingSenderId: "506555168483",
  appId: "1:506555168483:web:c29f7c7184acf7bfdff7d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// this exports the CONFIGURED version of firebase
export default app;