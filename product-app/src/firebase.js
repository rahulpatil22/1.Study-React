import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDrMFJ2i51BIGSvwZclEhNQtKNybvmDp6g",
    authDomain: "product-app-3385d.firebaseapp.com",
    projectId: "product-app-3385d",
    storageBucket: "product-app-3385d.appspot.com",
    messagingSenderId: "1096681099147",
    appId: "1:1096681099147:web:2dd09329321caf51fd298e",
    measurementId: "G-BXJ5KYKSDL"
  };
  const app = initializeApp(firebaseConfig);
  export const db =getDatabase(app);