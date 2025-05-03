// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAfTP7iioCrblvpEAPLgA9ZZh9Y7QMwj-w",
  authDomain: "news-app-feedback.firebaseapp.com",
  projectId: "news-app-feedback",
  storageBucket: "news-app-feedback.appspot.com",
  messagingSenderId: "686422575762",
  appId: "1:686422575762:web:f567c2079505e42e8b744b"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { db };
