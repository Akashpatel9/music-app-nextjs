"use client";
import FeaturedCard from "./FeaturedCard";
import data from "../../data/music_courses.json";
import { useRouter } from "next/navigation";

function FeaturedSection() {
  const router = useRouter();
  return (
    <div className="bg-[#101524] text-center text-white p-14">
      <div className="flex flex-col gap-3">
        <h5 className="text-[#0F7B72] text-xl uppercase">Featured courses</h5>
        <h1 className="font-extrabold text-4xl">Learn With the Best</h1>
      </div>
      <div className="flex flex-wrap justify-center gap-10 mt-14">
        {data.courses.map((e, idx) => {
          if (idx < 5)
            return (
              <FeaturedCard
                title={e.title}
                description={e.description}
                key={idx}
              />
            );
        })}
      </div>
      <button onClick={()=>router.push('/courses')} className="shadow-[0_4px_14px_0_rgb(0,0,0,10%)] hover:shadow-[0_6px_20px_rgba(93,93,93,23%)] px-10 py-4 bg-[#fff] text-[#696969] mt-16 rounded-md font-light transition duration-200 ease-linear">
        View All Courses
      </button>
    </div>
  );
}

export default FeaturedSection;
