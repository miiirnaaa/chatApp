import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage} from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDBTEhJCdZiT0w3YAASO-y_IJPB-yHs4ac",
  authDomain: "chat-app-d7940.firebaseapp.com",
  projectId: "chat-app-d7940",
  storageBucket: "chat-app-d7940.appspot.com",
  messagingSenderId: "938696904955",
  appId: "1:938696904955:web:ff08cf131b930cb232e05e",
  measurementId: "G-Q8TPKKP4QP"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth ();
export const storage = getStorage();
export const db = getFirestore();