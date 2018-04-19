import firebaseConfig from './firebase';

// Sign Up
export const doCreateUserWithEmailAndPassword = (email, password) =>
  firebaseConfig.auth().createUserWithEmailAndPassword(email, password);

// Sign In
export const doSignInWithEmailAndPassword = (email, password) => 
  firebaseConfig.auth().signInWithEmailAndPassword(email, password);

// Sign Out
export const doSignOut = () =>
  firebaseConfig.auth().signOut();

// Password Reset
export const doPasswordReset = (email) => 
  firebaseConfig.auth().sendPasswordResetEmail(email);

// Password Change
export const doPasswordUpdate = (password) =>
  firebaseConfig.auth().currentUser.updatePassword(password);

export const isAuthenticated = () => {
  return !!firebaseConfig.auth().currentUser || !!localStorage.getItem('authUser'); 
}