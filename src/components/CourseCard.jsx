"use client";
import { animated, useSpring } from '@react-spring/web';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CourseCard = ({course}) => {
    const [springs, api] = useSpring(() => ({
        scale: 1,
        shadow: 20,
        config: { tension: 300, friction: 20 },
    }));

    return (
        <animated.div
            className="card h-full border border-white/10 bg-slate-900 shadow-xl"
            style={{
                scale: springs.scale,
                boxShadow: springs.shadow.to(s => `0 ${s}px ${s * 2}px rgba(0,0,0,0.4)`),
            }}
            onMouseEnter={() => api.start({ scale: 1.04, shadow: 40 })}
            onMouseLeave={() => api.start({ scale: 1, shadow: 20 })}
        >
            <figure className="relative h-48 w-full">
                <Image
                    src={`${course.image}?auto=format&fit=crop&w=900&q=80`}
                    alt={course.title}
                    fill
                    className="object-cover"
                />
            </figure>
            <div className="card-body">
                <h3 className="card-title text-base text-cyan-300">{course.title}</h3>
                <p className="text-sm text-slate-300">Instructor: {course.instructor}</p>
                <p className="text-sm text-slate-400">Rating: {course.rating} / 5</p>
                <div className="card-actions justify-end">
                    <Link href={`/courses/${course.id}`} className="btn btn-info btn-sm">
                        View Details
                    </Link>
                </div>
            </div>
        </animated.div>
    );
};

export default CourseCard;