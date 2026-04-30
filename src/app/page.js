import HeroSlider from "@/components/HeroSlider";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-slate-950/90 space-y-20 py-15">
      <div className="mx-auto w-full max-w-6xl space-y-14 px-4 py-8 md:px-6 md:py-10">
        <HeroSlider></HeroSlider>
      </div>
    </div>

  );
}
