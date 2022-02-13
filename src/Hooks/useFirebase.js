import initializationAuth from "../Components/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";



initializationAuth();
const useFirebase = () => {
     const [user, setUser] = useState({});
     const [error, setError] = useState('');

     const auth = getAuth();

     // handle register
     const registerUser = (email, password) => {
          createUserWithEmailAndPassword(auth, email, password)
               .then((result) => {
                    const user = result.user;
                    setError('');
               })
               .catch((error) => {
                    setError(error.message);
               });
     }
     // handle login
     const loginUser = (email, password) => {
          signInWithEmailAndPassword(auth, email, password)
               .then((result) => {
                    const user = result.user;
                    setUser(user);
                    setError('');
               })
               .catch((error) => {
                    setError(error.message);
               });

     }

     // observation
     useEffect(() => {
          const unsubscribed = onAuthStateChanged(auth, (user) => {
               if (user) {
                    setUser(user);
               }
               else {
                    setUser({});
               }
          });
          return () => unsubscribed;
     }, [])

     // handle logout
     const logout = () => {
          signOut(auth)
               .then(() => {
                    // Sign-out successful.
               })
               .catch((error) => {
                    // An error happened.
               });
     }

     return {
          user,
          error,
          registerUser,
          loginUser,
          logout
     }

}

export default useFirebase;