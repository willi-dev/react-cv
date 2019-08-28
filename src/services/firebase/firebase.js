import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { conf } from './config.js'

const config = { ...conf };

const firebaseConfig = app.initializeApp(config);
const auth = app.auth();
const db = app.database();

export {
  auth,
  firebaseConfig,
  db
};  
