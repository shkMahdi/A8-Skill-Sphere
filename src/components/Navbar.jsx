"use client";
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import Spinner from './Spinner';

const Navbar = () => {
    const pathname = usePathname();
    const { data: session, isPending } = authClient.useSession()
    const user = session?.user;

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/courses', label: 'Courses' },
        { href: '/my-profile', label: 'My Profile' },
    ];

    const links = navLinks.map(({ href, label }) => (
        <li key={href}>
            <Link
                href={href}
                className={pathname === href ? 'text-cyan-400 font-semibold' : ''}
            >
                {label}
            </Link>
        </li>
    ));
    return (
        <div className='bg-slate-950/90 backdrop-blur-md'>
            <div className="max-w-6xl mx-auto navbar bg-slate-950/90 backdrop-blur-md shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link href="/" className="text-xl font-extrabold tracking-tight text-cyan-400">SkillSphere</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="flex items-center gap-3 navbar-end">
                    {isPending ? (
                        <Spinner></Spinner>
                    ) : user ? (
                        <>
                            <p className="text-sm text-slate-300 font-semibold">Hi, {user.name}</p>
                            <Image
                                src={user.image || '/userIcon.png'}
                                alt={user.name || "User"}
                                width={36}
                                height={36}
                                className="h-9 w-9 rounded-full border border-cyan-500/60 object-cover"
                            />
                            <button className="btn btn-sm btn-info" onClick={async () => await authClient.signOut()}>
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link href="/login" className="btn btn-sm btn-outline btn-info">
                                Login
                            </Link>
                            <Link href="/register" className="btn btn-sm btn-info">
                                Register
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;  