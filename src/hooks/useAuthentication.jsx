import { db } from "../firebase/config"

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut
} from 'firebase/auth';

import { useState, useEffect} from 'react';

export const useAuthentication = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const [ cancelled, setCancelled ] = useState(false);

  const auth = getAuth();

  function checkIfIsCancelled() {
    if(cancelled) {
      return;
    };
  };

  const createUser = async (data) => {
    checkIfIsCancelled();

    setLoading(true);

    try {
      const {user} = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
        
        await updateProfile(user, { displayName: data.displayName});

        setLoading(false);

        return user;

       } catch (error) {
        let systemErrorMessage;

        if (error.message.includes("Password")) {
          systemErrorMessage = "Password must be 6 or more characters"
        } else if (error.message.includes("email-already")) {
          systemErrorMessage = "This email already exists"
        } else {
          systemErrorMessage = "An error occurred, please try again later!"
        }
        
        setLoading(false);
        setError(systemErrorMessage);
       };
    };

    useEffect (() => {
      return () => setCancelled(true); 
    }, [])

    return {
      auth,
      createUser,
      error,
      loading,
    }
  }