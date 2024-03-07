// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoz-PLtnRvMPMz1ZSQVO4n3vxRmllt5uU",
  authDomain: "getrite-9f58a.firebaseapp.com",
  projectId: "getrite-9f58a",
  storageBucket: "getrite-9f58a.appspot.com",
  messagingSenderId: "312115317303",
  appId: "1:312115317303:web:ef576513148bd006ed8db2",
  measurementId: "G-VLF92NQEFQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth }