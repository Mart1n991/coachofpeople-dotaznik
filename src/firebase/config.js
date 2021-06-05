import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxvVTTdp3orkq4iOdo9NiBz-kVFGlg8TI",
  authDomain: "dotaznik-trenerludi.firebaseapp.com",
  projectId: "dotaznik-trenerludi",
  storageBucket: "dotaznik-trenerludi.appspot.com",
  messagingSenderId: "45301554065",
  appId: "1:45301554065:web:6c12ade30073e659ec1830",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
