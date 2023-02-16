import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyApnciSRIx74bjKEQfeMiiKWMJjbEZf1tQ",
  authDomain: "miniblog-14616.firebaseapp.com",
  projectId: "miniblog-14616",
  storageBucket: "miniblog-14616.appspot.com",
  messagingSenderId: "555216285563",
  appId: "1:555216285563:web:0823e674be6862e07d97de"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };