import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"


const firebaseConfig = {
  apiKey: "AIzaSyAQ8xvZQ-8VmDYWAgNT6rWE4QW7SoOzCFI",
  authDomain: "kpu-serkom.firebaseapp.com",
  projectId: "kpu-serkom",
  storageBucket: "kpu-serkom.appspot.com",
  messagingSenderId: "58180618857",
  appId: "1:58180618857:web:462902495e84c2e77630f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firestore (Database)
export const db = getFirestore(app)

// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app)