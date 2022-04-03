import {initializeApp} from 'firebase/app';
import {getStorage, setStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBTUR7uIrotpO3B_b671j1fFoTAHQ0vMSw",
  authDomain: "megastore-58b93.firebaseapp.com",
  projectId: "megastore-58b93",
  storageBucket: "megastore-58b93.appspot.com",
  messagingSenderId: "546318698887",
  appId: "1:546318698887:web:b0f3c155e82428662eab22",
  measurementId: "G-4V546LCFZ4"
};


export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);