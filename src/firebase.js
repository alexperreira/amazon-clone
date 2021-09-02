// import firebase from 'firebase/app';
import 'firebase/compat/auth';
// import firebaseui from 'firebaseui';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from '@firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyAA2f_Hik2b0a-lYkBm9hcpQUYtoFhgjaE',
	authDomain: 'react-app-clone-b5f63.firebaseapp.com',
	projectId: 'react-app-clone-b5f63',
	storageBucket: 'react-app-clone-b5f63.appspot.com',
	messagingSenderId: '662017250367',
	appId: '1:662017250367:web:cbd2b6d32961fade2b148a',
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth();

export { db, auth };

export default app;
