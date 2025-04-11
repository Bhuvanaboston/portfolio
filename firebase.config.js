// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCFWfMF2H6MsXYQIGvE_zn7UaotWNT5ci4',
  authDomain: 'bhuvana-portfolio.firebaseapp.com',
  projectId: 'bhuvana-portfolio',
  storageBucket: 'bhuvana-portfolio.firebasestorage.app',
  messagingSenderId: '844370688186',
  appId: '1:844370688186:web:c655c468f3704a15b0aa83',
  measurementId: 'G-DPJLPNP0TD',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
