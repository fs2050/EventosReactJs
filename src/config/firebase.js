import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBEZDoWhL6cPic68YIfgqq57H7eseK1uEE",
  authDomain: "eventos-e9b30.firebaseapp.com",
  databaseURL: "https://eventos-e9b30.firebaseio.com",
  projectId: "eventos-e9b30",
  storageBucket: "eventos-e9b30.appspot.com",
  messagingSenderId: "314214098952",
  appId: "1:314214098952:web:801808ea01ff772e5c49bd"
  };

  // Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
