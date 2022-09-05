import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDoLVj7xfzjQ1RcH_ftFqEtCXh-agCDPKM",
    authDomain: "task-management-app-by-dhruba.firebaseapp.com",
    projectId: "task-management-app-by-dhruba",
    storageBucket: "task-management-app-by-dhruba.appspot.com",
    messagingSenderId: "240338386887",
    appId: "1:240338386887:web:92f10f02674f871bee63e2",
    measurementId: "G-1PYK5396NR"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);