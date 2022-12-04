import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEt_R-nxqUCS8NMfdyd-1DL5KZiBSaSbI",
  authDomain: "financetracker-6bfa3.firebaseapp.com",
  projectId: "financetracker-6bfa3",
  storageBucket: "financetracker-6bfa3.appspot.com",
  messagingSenderId: "1020168866421",
  appId: "1:1020168866421:web:c1f941cf8fdd0ad02f463c"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

export { projectFirestore, projectAuth }