import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
    apiKey: "AIzaSyCA1Cw-qYJOsrUvu9l32hGijxYrmt7p0vg",
    authDomain: "susila-life-test.firebaseapp.com",
    projectId: "susila-life-test",
    storageBucket: "susila-life-test.appspot.com",
    messagingSenderId: "613256378659",
    appId: "1:613256378659:web:87b1e5406000d8ee8fb496",
    measurementId: "G-59ZWDRMEXP"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, analytics };