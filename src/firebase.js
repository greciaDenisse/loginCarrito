import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyA-F3eh9z74kahIDqBgJqjOOp9XDQrGxgU",
  authDomain: "login-81d00.firebaseapp.com",
  databaseURL: "https://login-81d00-default-rtdb.firebaseio.com",
  projectId: "login-81d00",
  storageBucket: "login-81d00.appspot.com",
  messagingSenderId: "875657179669",
  appId: "1:875657179669:web:46e005a3a9e36e6e34541c"
  };
  
  var fireDB=firebase.initializeApp(firebaseConfig);

  export default fireDB;