/**
 * Firebase configuration and setup
 */

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCmJPWQ6GtEj6Pw6Pg4_UkFtsIJvDCE3R0",
  authDomain: "fir-nextjs-login-2cff4.firebaseapp.com",
  projectId: "fir-nextjs-login-2cff4",
  storageBucket: "fir-nextjs-login-2cff4.appspot.com",
  messagingSenderId: "783840713486",
  appId: "1:783840713486:web:57f7cc609d5c455e98555f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// export the auth app
export const auth = getAuth(app)
