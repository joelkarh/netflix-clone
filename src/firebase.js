import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyCfKF3XYGvKQlngrUp9ynl0hbjPexpFU6o",
    authDomain: "netflix-build-78d9a.firebaseapp.com",
    projectId: "netflix-build-78d9a",
    storageBucket: "netflix-build-78d9a.appspot.com",
    messagingSenderId: "760173378720",
    appId: "1:760173378720:web:878a3812ac288fbc851dc5"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig) ;
  const db = firebaseApp.firestore(); //firestore : realtime database 
  const auth = firebase.auth();

export {auth};
export default db; 