import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
const firebaseConfig = {
    apiKey: "AIzaSyC_kVc4OFUVSjUkBDbv9D8keqnS5MdLark",
    authDomain: "bidibet-test.firebaseapp.com",
    projectId: "bidibet-test",
    storageBucket: "bidibet-test.appspot.com",
    messagingSenderId: "944347757148",
    appId: "1:944347757148:web:abca81e976cf75571c8499"
};
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };