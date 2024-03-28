import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDh6fgzKjHuxcwdk6mW7sxi8Qb1sOh0uRo",
    authDomain: "growthhub-31e36.firebaseapp.com",
    projectId: "growthhub-31e36",
    storageBucket: "growthhub-31e36.appspot.com",
    messagingSenderId: "621936415960",
    appId: "1:621936415960:web:cfa465dd3a1a7b086ff3ad",
    measurementId: "G-6DZM1P2E32"
};


export const appInit = initializeApp(firebaseConfig);
export const auth = getAuth(appInit);
export const db = getFirestore(appInit);