import { getCourseById } from '@/lib/api';
import Image from 'next/image';
import React from 'react';

const curriculum = [
    "Introduction and setup",
    "Core concepts and fundamentals",
    "Hands-on mini project",
    "Advanced implementation patterns",
    "Deployment and best practices",
];

const CourseDetailsPage = async ({ params }) => {
    const { id } = await params;
    const course = await getCourseById(id);
    return (
        <div className='bg-slate-950/90'>
            <div className="mx-auto w-full max-w-5xl px-4 py-8 md:px-6 md:py-10">
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
                    <div className="relative h-72 w-full">
                        <Image
                            src={`${course.image}?auto=format&fit=crop&w=1200&q=80`}
                            alt={course.title}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="space-y-4 p-6">
                        <h1 className="text-3xl font-bold">{course.title}</h1>
                        <p className="text-slate-300">{course.description}</p>

                        <div className="grid gap-3 rounded-xl bg-slate-800 p-4 text-sm text-slate-200 md:grid-cols-4">
                            <p>Instructor: {course.instructor}</p>
                            <p>Duration: {course.duration}</p>
                            <p>Level: {course.level}</p>
                            <p>Rating: {course.rating}/5</p>
                        </div>

                        <div>
                            <h2 className="mb-2 text-xl font-semibold text-cyan-300">Course Curriculum</h2>
                            <ul className="list-inside list-disc space-y-1 text-slate-300">
                                {curriculum.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default CourseDetailsPage;