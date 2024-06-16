"use client";

import Link from "next/link";
import React from "react";
import { cn } from "@/utils/cn";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
import { useRouter } from "next/navigation";

function HeroSection() {
  const router = useRouter();
  return (
    <div className="h-auto md:h-[45rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-auto mx-auto py-10 md:py-0">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="text-white p-4 relative z-10 w-full text-center">
        <h1 className="text-4xl mt-20 md:mt-0 md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Master the Art of Music
        </h1>
        <h4 className="mt-10 md:text-lg font-normal text-base text-neutral-300 max-w-lg mx-auto">
          Dive into our comprehensive music courses and transform your musical
          journey today. Whether you are a beginner or looking to refine your
          skills, join us to unlock your true potential.
        </h4>
        <div className="mt-14" onClick={() => router.push("/courses")}>
          <Button
            borderRadius="1.75rem"
            className="bg-white dark:bg-zinc-900 text-black dark:text-white border-neutral-200 dark:border-zinc-800"
          >
            Explore Courses
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
