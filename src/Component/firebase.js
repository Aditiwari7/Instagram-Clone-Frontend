import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const app = initializeApp({
    apiKey: "AIzaSyDuv_A0G4xqTwrRvCnuMvkutp2qkFLo1EA",
    authDomain: "myinstagram-c1e56.firebaseapp.com",
    projectId: "myinstagram-c1e56",
    storageBucket: "myinstagram-c1e56.appspot.com",
    messagingSenderId: "393325801643",
    appId: "1:393325801643:web:2ccd076ac04645afcbc7ee",
    measurementId: "G-PWHGJBJ4S8"
  });

  const auth = getAuth(app);
  const storage = getStorage(app);
  
  export {storage,auth};