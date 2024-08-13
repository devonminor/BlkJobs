'use client';
import { auth } from '@/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import NavBar from './NavBar';

export default function Home() {
    const [user] = useAuthState(auth);
    return (
        <main className='flex min-h-screen flex-col items-center justify-between p-24'>
            <p>Blk Jobs</p>
            <div className='App'>
                <NavBar />
            </div>
        </main>
    );
}
