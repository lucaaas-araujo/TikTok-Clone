import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyD8p_mAVDTdyp3Uk7KewJYigQEHWkYeqo8",
  authDomain: "tiktokclone-d1dde.firebaseapp.com",
  projectId: "tiktokclone-d1dde",
  storageBucket: "tiktokclone-d1dde.appspot.com",
  messagingSenderId: "643183104324",
  appId: "1:643183104324:web:7dc31074a2a31479804711"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;