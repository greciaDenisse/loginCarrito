import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyC1wugZyf5Engx7s9Z2VpduGM2KpRuI7JQ",
  authDomain: "carrito-9e334.firebaseapp.com",
  databaseURL: "https://carrito-9e334-default-rtdb.firebaseio.com",
  projectId: "carrito-9e334",
  storageBucket: "carrito-9e334.appspot.com",
  messagingSenderId: "420164951199",
  appId: "1:420164951199:web:68ad68d0c4b866d1d4d6aa"
  };
  
  var fireDB=firebase.initializeApp(firebaseConfig);

  export default fireDB;