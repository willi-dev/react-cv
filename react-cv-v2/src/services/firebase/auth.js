import { auth } from './firebase';

/**
 * doCreateUserWithEmailAndPassword
 * @author willi <https://github.com/willi-dev>
 * @param email 
 * @param password 
 */
export const doCreateUserWithEmailAndPassword = (email, password) => {
  auth.createUserWithEmailAndPassword(email, password);
}

/**
 * doSignInWithEmailAndPassword
 * @author willi <https://github.com/willi-dev>
 * @param email 
 * @param password 
 */
export const doSignInWithEmailAndPassword = (email, password) => {
  auth.signInWithCustomToken(email, password);
}

/**
 * doSignOut
 * @author willi <https://github.com/willi-dev>
 */
export const doSignOut = () => {
  auth.signOut();
}

/**
 * doPasswordReset
 * @author willi <https://github.com/willi-dev>
 * @param email 
 */
export const doPasswordReset = email => {
  auth.sendPasswordResetEmail(email);
}

/**
 * doPasswordUpdate
 * @author willi <https://github.com/willi-dev>
 * @param password 
 */
export const doPasswordUpdate = password => {
  auth.currentUser.updatePassword(password);
}

/**
 * isAuthenticated
 * @author willi <https://github.com/willi-dev>
 */
export const isAuthenticated = () => {
  return !!auth.currentUser || !!localStorage.getItem('authUser');
}
