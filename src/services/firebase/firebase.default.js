import * as firebase from 'firebase';

var config = {
  apiKey: "YOUR-FIREBASE-API-KEY",
  authDomain: "YOUR-FIREBASE-AUTH-DOMAIN",
  databaseURL: "YOUR-FIREBASE-DATABASE-URL",
  projectId: "YOUR-FIREBASE-PROJECT-ID",
  storageBucket: "YOUR-FIREBASE-STORAGE-BUCKET",
  messagingSenderId: "YOUR-FIREBASE-MESSAGINGSENDER-ID"
}
const firebaseConfig = firebase.initializeApp(config);
// if (!firebase.apps.length) {
//   firebase.initializeApp(config);
// }
const auth = firebase.auth();

export {
  auth,
  firebaseConfig
};  
