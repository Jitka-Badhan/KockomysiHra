import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: 'AIzaSyA1X7ME3xQlOzXVDjloiWjBtALdbOKgmD0',
  authDomain: 'kockomysi-hra.firebaseapp.com',
  projectId: 'kockomysi-hra',
  storageBucket: 'kockomysi-hra.appspot.com',
  messagingSenderId: '28177442574',
  appId: '1:28177442574:web:35472412da5b3101d2195f',
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
