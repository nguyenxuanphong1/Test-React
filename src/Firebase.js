import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyDes4QsbOGU0bXyUxRjLKVVTqJaplu-mWo",
    projectId: "fir-game-52570",
    authDomain: "fir-game-52570.firebaseapp.com",
};

export const fb = initializeApp(firebaseConfig);
export const firestore = getFirestore(fb);
