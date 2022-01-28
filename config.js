import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB5qVfIxocmlU7yDhhcQuOhFYQyLauWykg",
    authDomain: "comments-56966.firebaseapp.com",
    databaseURL: "https://comments-56966-default-rtdb.firebaseio.com",
    projectId: "comments-56966",
    storageBucket: "comments-56966.appspot.com",
    messagingSenderId: "893622129199",
    appId: "1:893622129199:web:67da9ff2d86066afb06cda"
};

firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;