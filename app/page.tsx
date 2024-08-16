'use client';

import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, User } from "firebase/auth";
import { auth } from "@/firebase";

const Home = () => {
    // Define user state type as User or null
    const [user, setUser] = useState<User | null>(null);

    const handleGoogleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                // Set the signed-in user info
                setUser(result.user);
                console.log("User signed in: ", result.user);
            })
            .catch((error) => {
                // Handle Errors here.
                console.error("Error during sign in: ", error);
            });
    };

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                // Clear the user state
                setUser(null);
                console.log("User signed out successfully");
            })
            .catch((error) => {
                console.error("Error during sign out: ", error);
            });
    };

    useEffect(() => {
        handleGoogleSignIn();
    }, []);

    return (
        <div>
            <h1>Welcome to the app</h1>
            {user ? (
                <div>
                    <p>Signed in as {user.displayName}</p>
                    <button onClick={handleSignOut}>Sign Out</button>
                </div>
            ) : (
                <button onClick={handleGoogleSignIn}>Sign in with Google</button>
            )}
        </div>
    );
};

export default Home;
