// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMhS9P06VmJXOhs166ad8ZVL1gMWXw9qw",
  authDomain: "seat-randomizer.firebaseapp.com",
  projectId: "seat-randomizer",
  storageBucket: "seat-randomizer.appspot.com",
  messagingSenderId: "376199817106",
  appId: "1:376199817106:web:13e868e6c994ed9758434b",
  measurementId: "G-PSYJ97RBMQ"
};

// Initialize Firebase
export function initFirebase() {
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

    return {
        app,
        analytics,
    };
}