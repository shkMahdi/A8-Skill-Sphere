import CourseCard from "@/components/CourseCard";
import HeroSlider from "@/components/HeroSlider";
import { getData } from "@/lib/api";
import Link from "next/link";


const getPopularCourses = (courses) =>{
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
      </div>
    </div>

  );
}
