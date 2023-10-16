
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC4I1PxEOY3ziyXNUAzOdPg6WsOdLB5ibQ",
    authDomain: "warhousefrenchies-b3527.firebaseapp.com",
    projectId: "warhousefrenchies-b3527",
    storageBucket: "warhousefrenchies-b3527.appspot.com",
    messagingSenderId: "173296105940",
    appId: "1:173296105940:web:6720e8fc5b67a63be03e41",
    measurementId: "G-18FG7TTKJJ"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);