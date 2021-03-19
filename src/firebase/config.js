import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAm9lw1Usot9lMgQaDr0DDrS9srpkE5QR0",
  authDomain: "trener-ludi-dotaznik.firebaseapp.com",
  projectId: "trener-ludi-dotaznik",
  storageBucket: "trener-ludi-dotaznik.appspot.com",
  messagingSenderId: "260751963694",
  appId: "1:260751963694:web:fef1cf922d3fe2764611bf",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
