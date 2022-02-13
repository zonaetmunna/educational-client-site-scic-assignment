import firebaseConfig from "./firebase.config";
import { initializeApp } from "firebase/app";

const initializationAuth = () => {
     return initializeApp(firebaseConfig);
};

export default initializationAuth;