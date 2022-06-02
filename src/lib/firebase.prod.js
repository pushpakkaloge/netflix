import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from "../seed";

const config={
    apiKey: "AIzaSyBYJErHKoWavLDMkg9fIkauSlzww8wJb3M",
    authDomain: "netflix-8a0ed.firebaseapp.com",
    projectId: "netflix-8a0ed",
    storageBucket: "netflix-8a0ed.appspot.com",
    messagingSenderId: "226039772755",
    appId: "1:226039772755:web:b78daa2ec72571987438a6"
};

const firebase = Firebase.initializeApp(config);


// 

export {firebase};