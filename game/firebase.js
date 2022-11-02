// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import {
  getAuth,
  signInAnonymously,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";
import {
  getDatabase,
  ref,
  set,
  onDisconnect,
  onValue,
  onChildAdded,
  onChildRemoved,
  update,
  remove,
} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export {
  auth,
  signInAnonymously,
  onAuthStateChanged,
  db,
  ref,
  set,
  onDisconnect,
  onValue,
  onChildAdded,
  onChildRemoved,
  update,
  remove,
};
