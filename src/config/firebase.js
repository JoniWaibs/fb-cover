import firebase from 'firebase';

export const firebaseConfig = {
  apiKey: "AIzaSyC5r3-iYUw5p8DBiiBgI4ievyHtqPSWn8c",
  authDomain: "facebook-cover-a2a1d.firebaseapp.com",
  projectId: "facebook-cover-a2a1d",
  storageBucket: "facebook-cover-a2a1d.appspot.com",
  messagingSenderId: "708770208592",
  appId: "1:708770208592:web:94db71938c46edaa9c6a55",
};


const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const storage = app.storage();

const auth = firebase.auth();
// var provider = new firebase.auth.FacebookAuthProvider();
var provider = new firebase.auth.GoogleAuthProvider();


export { auth , provider, db, storage };
export default app;
