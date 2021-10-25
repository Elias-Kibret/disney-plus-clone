import firebase from "firebase";


const firebaseConfig = {
  // apiKey: "AIzaSyA9BnlX96fMf7XiUVCFRsoQzG8DGERJkeY",
  // authDomain: "disneyplus-clone-a33d5.firebaseapp.com",
  // projectId: "disneyplus-clone-a33d5",
  // storageBucket: "disneyplus-clone-a33d5.appspot.com",
  // messagingSenderId: "37918794208",
  // appId: "1:37918794208:web:dbe9842dfe1dda522a4b85",
  // measurementId: "G-DRVLJKWRWG",

  apiKey: "AIzaSyBE5Vuw2Exf-powwbr0-ck74S5rfAin_uU",
  authDomain: "disney-clone-69c0a.firebaseapp.com",
  projectId: "disney-clone-69c0a",
  storageBucket: "disney-clone-69c0a.appspot.com",
  messagingSenderId: "526281277504",
  appId: "1:526281277504:web:c663b04b33d37610221fa5",
  measurementId: "G-3QFJWFH6BL"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth,provider,storage};
export default db;