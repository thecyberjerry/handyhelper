// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyDW0MRtDS3CyqB9Fzqm1gokSQrLL5hCppU",
//     authDomain: "handyhelper-b642d.firebaseapp.com",
//     projectId: "handyhelper-b642d",
//     storageBucket: "handyhelper-b642d.appspot.com",
//     messagingSenderId: "494927209958",
//     appId: "1:494927209958:web:4594c33e2488856eb3a227",
//     measurementId: "G-QP8KSJ90H3"
// };
console.log(process.env.storageBucket);

const firebaseConfig = {
    apiKey: process.env.FIRESTORE_APIKEY,
    authDomain: process.env.FIRESTORE_AUTHDOMAIN,
    projectId: process.env.FIRESTORE_PROJECTID,
    storageBucket: "handyhelper-b642d.appspot.com",
    messagingSenderId: process.env.FIRESTORE_MESSAGINGSENDERID,
    appId: process.env.FIRESTORE_APPID,
    measurementId: process.env.FIRESTORE_MEASUREMENTID
};


// Initialize Firebase
// 
const STORAGE_FOLDER_PATH = "gs://handyhelper-b642d.appspot.com"
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app, STORAGE_FOLDER_PATH);
