'use client';

import { auth } from '@/firebase';

import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

const NavBar = () => {
    const [user] = useAuthState(auth);
    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
    };
    const signOut = () => {
        auth.signOut();
    };

    return (
        <nav className='nav-bar'>
            <h1>React Chat</h1>
            {user ? (
                <button onClick={signOut} className='sign-out' type='button'>
                    Sign Out
                </button>
            ) : (
                <button onClick={googleSignIn} className='sign-in'>
                    Sign In With Google
                </button>
            )}
        </nav>
    );
};
export default NavBar;
