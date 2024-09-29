import React, { useState, useEffect } from 'react';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  type User,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  setPersistence,
  browserLocalPersistence,
  getAuth,
} from 'firebase/auth';
import { useAuth } from './AuthContext';
import { auth } from '../../../firebase-config'; // Assuming you have this set up

const FirebaseAuth: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const auth = getAuth();

  useEffect(() => {
    // Set persistence only once when the component mounts
    setPersistence(auth, browserLocalPersistence)
      .then(() => {
        // Set up the onAuthStateChanged listener to detect login state
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            setUser(user);
          } else {
            setUser(null);
          }
        });
        return unsubscribe; // Clean up the listener on unmount
      })
      .catch((error) => {
        console.error("Error setting persistence:", error);
      });
  }, [auth]);

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    }
  };

  const handleSignUp = async () => {
    setError(null); // Reset error state
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    }
  };

  const handleSignIn = async () => {
    setError(null); // Reset error state
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    }
  };

  return (
    <div>
      {user ? (
        <p>Welcome, {user.email}!</p>
      ) : (
        <div className="br-2 bg-slate-500 p-5">
          <h1 className="text-2xl w-full mb-5">Log In</h1>
          <div className="border-black border-4 flex gap-5 ">
            <input
              className="m-5"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="m-5"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleSignIn}>Sign In</button>
            <button onClick={handleSignUp}>Sign Up</button>
            <button onClick={handleGoogleSignIn}>Use Google To Sign In</button>
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
      )}
    </div>
  );
};

export default FirebaseAuth;
