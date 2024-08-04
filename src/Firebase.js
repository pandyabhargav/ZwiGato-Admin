
 import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  // Your Firebase config object
  apiKey: "AIzaSyBYjqfPn4XkLTQe5m2IOAaaVTXhhb0_qno",
  authDomain: "zwigato-crud.firebaseapp.com",
  projectId: "zwigato-crud",
  storageBucket: "zwigato-crud.appspot.com",
  messagingSenderId: "745803614590",
  appId: "1:745803614590:web:a91f1efa8095f5d7d18b2f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage }; // Export Firestore instance (db)



