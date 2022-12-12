import {initializeApp} from "firebase/app";
import "firebase/auth";
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDgMLu7bS__3_jZQKU_lX1CyQ_RQ7ra0xI",
    authDomain: "netflix-clone-sh.firebaseapp.com",
    projectId: "netflix-clone-sh",
    storageBucket: "netflix-clone-sh.appspot.com",
    messagingSenderId: "125366753878",
    appId: "1:125366753878:web:510410d9c7ca5326e079f7"
};

const firebaseApp = initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebaseApp.auth()

export {db, auth}
