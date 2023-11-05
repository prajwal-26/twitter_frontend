import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyB8foi6174yoRyx8EGuMwgYYbs6wktJvng",
  authDomain: "twitter-clone-bd8b9.firebaseapp.com",
  projectId: "twitter-clone-bd8b9",
  storageBucket: "twitter-clone-bd8b9.appspot.com",
  messagingSenderId: "604224431975",
  appId: "1:604224431975:web:4b0050bf9ed0375896b1c2",
  measurementId: "G-MPYEXX6HSY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app)
export default auth;