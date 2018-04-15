import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyDdPKeAue0qqpDMj7sbqGY9IgRolAe_FkI",
  authDomain: "willicv-8d052.firebaseapp.com",
  databaseURL: "https://willicv-8d052.firebaseio.com",
  projectId: "willicv-8d052",
  storageBucket: "willicv-8d052.appspot.com",
  messagingSenderId: "323654850234"
}

// if (!firebase.apps.length) {
//   firebase.initializeApp(config);
// }
const firebaseConfig = firebase.initializeApp(config);

export default firebaseConfig;
