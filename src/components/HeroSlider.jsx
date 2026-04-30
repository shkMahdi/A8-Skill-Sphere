'use client';

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const HeroSlider = () => {

    const slides = [
        {
            title: "Upgrade Your Skills Today 🚀",
            subtitle: "Build practical expertise with guided lessons and projects.",
        },
        {
            title: "Learn from Industry Experts",
            subtitle: "Get insights from instructors working in top global teams.",
        },
    ];

    return (
        <Swiper modules={[Autoplay, Pagination]} autoplay={{ delay: 3000 }} loop pagination={{ clickable: true }}>
            {slides.map((slide) => (
                <SwiperSlide key={slide.title}>
                    <section className="rounded-2xl border border-cyan-500/30 bg-linear-to-r from-cyan-900/30 to-slate-900 p-8 md:p-14">
                        <h1 className="text-3xl font-extrabold tracking-tight text-white md:text-5xl">{slide.title}</h1>
                        <p className="mt-4 max-w-2xl text-slate-200">{slide.subtitle}</p>
                    </section>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default HeroSlider;