"use client";
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const RegisterPage = () => {
    const { register, handleSubmit } = useForm();

    const handleRegister = async (data) => {
        console.log(data);

        const { name, email, password, image } = data;

        const { data: res, error } = await authClient.signUp.email({
            name: name, // required
            email: email, // required
            password: password, // required
            image: image,
            callbackURL: "/",
        });

        console.log(res, error);

        if(error) {
            toast.error(error.message);
        }

        if(res) {
            toast.success("Account created successfully!");
        }
    }
    return (
        <div className="bg-slate-950/90 space-y-20 py-15">
            <div className="mx-auto w-full max-w-md px-4 py-12">
                <div className="rounded-2xl border border-white/10 bg-slate-900 p-6 md:p-8">
                    <h1 className="text-2xl font-bold">Register</h1>
                    <form className="mt-6 space-y-4" onSubmit={handleSubmit(handleRegister)}>
                        <input
                            className="input input-bordered w-full bg-slate-800"
                            type="text"
                            {...register("name")}
                            placeholder="Name"
                            required

                        />
                        <input
                            className="input input-bordered w-full bg-slate-800"
                            type="email"
                            {...register("email")}
                            placeholder="Email"
                            required

                        />
                        <input
                            className="input input-bordered w-full bg-slate-800"
                            type="url"
                            {...register("image")}
                            placeholder="Photo URL"
                            required

                        />
                        <input
                            className="input input-bordered w-full bg-slate-800"
                            type="password"
                            {...register("password")}
                            placeholder="Password"
                            required

                        />
                        <button className="btn btn-info w-full" type="submit">
                            {/* {loading ? "Creating account..." : "Register"} */}Register
                        </button>
                    </form>

                    <button className="btn btn-outline mt-3 w-full" type="button">
                        Continue with Google
                    </button>

                    <p className="mt-4 text-sm text-slate-300">
                        Already have an account?{" "}
                        <Link href="/login" className="link link-info">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;