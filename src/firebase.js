import firebase from "firebase";


const firebaseConfig = {



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
