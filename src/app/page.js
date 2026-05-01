import CourseCard from "@/components/CourseCard";
import HeroSlider from "@/components/HeroSlider";
import { getData } from "@/lib/api";
import Link from "next/link";


const getPopularCourses = (courses) => {
  return [...courses].sort((a, b) => a.rating - b.rating).slice(0, 3);
}

export default async function Home() {
  const allCourses = await getData();
  const popularCourses = getPopularCourses(allCourses);

  return (
    <div className="bg-slate-950/90 space-y-20 py-15">
      <div className="mx-auto w-full max-w-6xl space-y-14 px-4 py-8 md:px-6 md:py-10">
        <HeroSlider></HeroSlider>

        <section>
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-2xl font-bold">Popular Courses</h2>
            <Link href="/courses" className="btn btn-sm btn-outline btn-info">
              Browse All
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {
              popularCourses.map((course) =>
                <CourseCard key={course.id} course={course}></CourseCard>
              )
            }
          </div>
        </section>

        <section className="grid gap-6 rounded-2xl border border-white/10 bg-slate-900 p-6 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-cyan-300">📌 Learning Tips</h2>
            <ul className="mt-4 space-y-2 text-slate-300">
              <li>Break long sessions into focused 45-minute blocks.</li>
              <li>Use active recall and note key ideas after each lesson.</li>
              <li>Schedule weekly reviews to retain concepts long-term.</li>
              <li>Track progress using small project milestones.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-cyan-300">🏆 Top Instructors</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {["John Doe", "Sarah Miles", "Ariana Fox", "Michael Tan"].map((name) => (
                <div key={name} className="rounded-xl border border-white/10 bg-slate-800 p-4">
                  <h3 className="font-semibold">{name}</h3>
                  <p className="text-sm text-slate-400">Expert Mentor</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>

  );
}
