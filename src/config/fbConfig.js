import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDYmkq3R7SpWBYiUEKCU8N2SSG-6ojzuc0",
    authDomain: "cozy-67b69.firebaseapp.com",
    databaseURL: "https://cozy-67b69.firebaseio.com",
    projectId: "cozy-67b69",
    storageBucket: "cozy-67b69.appspot.com",
    messagingSenderId: "657817307838"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots: true});

  export default firebase;