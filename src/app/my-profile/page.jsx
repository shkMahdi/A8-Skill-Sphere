"use client";
import Spinner from '@/components/Spinner';
import UpdateModal from '@/components/UpdateModal';
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const MyProfile = () => {
    const { data: session, isPending } = authClient.useSession()
    // console.log(session);
    const user = session?.user;

    if (isPending) {
        return (
            <div className="flex flex-1 items-center justify-center bg-slate-950">
                <Spinner></Spinner>
            </div>
        );
    }

    if (!user) {
        return (
            <div className="flex flex-1 items-center justify-center bg-slate-950">
                <p className="text-slate-400">You are not logged in.</p>
            </div>
        );
    }

    return (
        <div className="bg-slate-950/90 space-y-20 py-15">
            <div className="mx-auto w-full max-w-3xl px-4 py-10">
                <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">
                    <h1 className="text-3xl font-bold">My Profile</h1>
                    <p className="mt-2 text-slate-300">Manage your account details and keep your profile updated.</p>

                    <div className="mt-6 flex items-center gap-4">
                        <Image
                            src={user.image || '/userIcon.png'}
                            alt={user.name || "User"}
                            width={80}  
                            height={80}
                            className="h-20 w-20 rounded-full border border-cyan-500/50 object-cover"
                        />
                        <div>
                            <p className="text-lg font-semibold">{user.name || "Unnamed User"}</p>
                            <p className="text-sm text-slate-400">{user.email}</p>
                        </div>
                    </div>

                    <UpdateModal></UpdateModal>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;