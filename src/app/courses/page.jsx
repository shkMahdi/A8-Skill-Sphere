'use client';

import CourseCard from '@/components/CourseCard';
import { getData } from '@/lib/api';
import React, { useState, useEffect, useMemo } from 'react';

const CoursesPage = () => {
    const [courses, setCourses] = useState([]);
    const [query, setQuery] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const data = await getData();
            setCourses(data);
        };

        fetchData();
    }, []);

    const filteredCourses = useMemo(() => {
        return courses.filter((course) =>
            course.title.toLowerCase().includes(query.trim().toLowerCase())
        );
    }, [courses, query]);

    return (
        <div className="bg-slate-950/90" >
            <div className="mx-auto w-full max-w-6xl px-4 py-8 md:px-6 md:py-10">
                <h1 className="text-3xl font-bold">All Courses</h1>

                <label className="input input-bordered mt-6 flex items-center gap-2 bg-slate-900">
                    <input
                        type="text"
                        className="grow"
                        placeholder="Search by course title..."
                        value={query}
                        onChange={(event) => setQuery(event.target.value)}
                    />
                </label>

                <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredCourses.map((course) => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>

                {filteredCourses.length === 0 && (
                    <div className="mt-10 rounded-xl border border-white/10 bg-slate-900 p-6 text-slate-300">
                        No courses found for your search.
                    </div>
                )}
            </div>
        </div>
    )

};

export default CoursesPage;