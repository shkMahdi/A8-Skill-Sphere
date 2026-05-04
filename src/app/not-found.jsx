import Link from 'next/link';
import React from 'react';

const Notfound = () => {
    return (
         <div className="bg-slate-950/90 space-y-20 py-15">
            <div className="mx-auto flex min-h-[60vh] w-full max-w-3xl flex-col items-center justify-center px-4 text-center">
                <h1 className="text-5xl font-extrabold text-cyan-400">404</h1>
                <p className="mt-3 text-slate-300 font-bold">The page you are looking for does not exist.</p>
                <Link href="/" className="btn btn-info mt-6">
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default Notfound;