import initializationAuth from "../Components/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";



initializationAuth();
const useFirebase = () => {
     const [user, setUser] = useState({});
     const [error, setError] = useState('');
     const [isLoading, setIsLoading] = useState(true);

     const auth = getAuth();

     // handle register
     const registerUser = (email, password, name, navigate) => {
          setIsLoading(true);
          createUserWithEmailAndPassword(auth, email, password)
               .then((result) => {
                    const user = result.user;
                    const newUser = { email, displayName: name };
                    setUser(newUser);
                    // send to firebase user Name
                    updateProfile(auth.currentUser, {
                         displayName: name
                    }).then(() => {

                    }).catch((error) => {

                    });
                    setError('');
                    // navigate
                    navigate('/');
               })
               .catch((error) => {
                    setError(error.message);
               })
               .finally(() => setIsLoading(false));
     }
     // handle login
     const loginUser = (email, password, navigate, location) => {
          setIsLoading(true);
          signInWithEmailAndPassword(auth, email, password,)
               .then((result) => {
                    const user = result.user;
                    setUser(user);
                    setError('');
                    // navigate
                    const destination = location.state?.from?.pathname || "/";
                    navigate(destination);

               })
               .catch((error) => {
                    setError(error.message);
               })
               .finally(() => setIsLoading(false));
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
               setIsLoading(false);
          });
          return () => unsubscribed;
     }, [])

     // handle logout
     const logout = () => {
          setIsLoading(true);
          signOut(auth)
               .then(() => {
                    // Sign-out successful.
               })
               .catch((error) => {
                    // An error happened.
               })
               .finally(() => setIsLoading(false));
     }

     return {
          user,
          error,
          registerUser,
          loginUser,
          logout,
          isLoading
     }

}

export default useFirebase;