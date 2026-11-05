// Firebase Console > Project settings > Your apps > Web app থেকে config বসান।
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: 'PASTE_API_KEY', authDomain: 'PASTE_PROJECT.firebaseapp.com',
  projectId: 'PASTE_PROJECT_ID', storageBucket: 'PASTE_PROJECT.appspot.com',
  messagingSenderId: 'PASTE_SENDER_ID', appId: 'PASTE_APP_ID'
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
