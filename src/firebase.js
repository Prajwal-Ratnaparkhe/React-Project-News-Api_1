
import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
    // Your web app's Firebase configuration

    apiKey: "AIzaSyAfTP7iioCrblvpEAPLgA9ZZh9Y7QMwj-w",
    authDomain: "news-app-feedback.firebaseapp.com",
    projectId: "news-app-feedback",
    storageBucket: "news-app-feedback.appspot.com",
    messagingSenderId: "686422575762",
    appId: "1:686422575762:web:f567c2079505e42e8b744b"

});

var db = firebaseApp.firestore();

export { db };