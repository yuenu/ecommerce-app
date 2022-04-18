// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBBGX0P9x92tojjv7GQO8yNpG7N_9jkUXk',
  authDomain: 'react-widget-11077.firebaseapp.com',
  projectId: 'react-widget-11077',
  storageBucket: 'react-widget-11077.appspot.com',
  messagingSenderId: '456281919971',
  appId: '1:456281919971:web:472a864b97b946dbf8d0d6',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
