"use client";
import { authClient } from '@/lib/auth-client';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const MODAL_ID = 'my_modal_5';

const UpdateModal = () => {
    const { register, handleSubmit, reset } = useForm();

    const handleUpdate = async (data) => {
        const { name, image } = data;

        const { error } = await authClient.updateUser({ name, image });

        if (error) {
            toast.error(error.message || "Failed to update information.");
        } else {
            toast.success("Information updated successfully!");
            reset();
            document.getElementById(MODAL_ID)?.close();
        }
    };

    return (
        <div>
            <button
                className="btn btn-info mt-8 rounded-xl"
                onClick={() => document.getElementById(MODAL_ID)?.showModal()}
            >
                Update Information
            </button>

            <dialog id={MODAL_ID} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box bg-slate-900">
                    <div className="rounded-2xl bg-slate-900 md:p-8">
                        <h1 className="text-2xl font-bold">Update Information</h1>
                        <form className="mt-6 space-y-4" onSubmit={handleSubmit(handleUpdate)}>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="update-name" className="text-sm font-medium text-slate-300">Name</label>
                                <input
                                    id="update-name"
                                    className="input input-bordered w-full bg-slate-800"
                                    type="text"
                                    {...register("name")}
                                    placeholder="Enter your name"
                                    required
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="update-image" className="text-sm font-medium text-slate-300">Photo URL</label>
                                <input
                                    id="update-image"
                                    className="input input-bordered w-full bg-slate-800"
                                    type="url"
                                    {...register("image")}
                                    placeholder="https://example.com/photo.jpg"
                                    required
                                />
                            </div>
                            <button className="btn btn-info w-full" type="submit">
                                Update Information
                            </button>
                        </form>
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    );
};

export default UpdateModal;
