
import * as firebase from 'firebase/app'
import 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmCTHBzWBFJA2-DPv0R5tnvaehl0j_HMA",
  authDomain: "yarn-2f2e0.firebaseapp.com",
  projectId: "yarn-2f2e0",
  storageBucket: "yarn-2f2e0.appspot.com",
  messagingSenderId: "278899846063",
  appId: "1:278899846063:web:da535b5f408b4d09625d5a",
  measurementId: "G-8Z3SNNWZD5"
};

// Initialize Firebase
let app = null;
if(!firebase.app.length){
    app = firebase.initializeApp(firebaseConfig);
}

export default firebase
