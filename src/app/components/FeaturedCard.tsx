"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";


function FeaturedCard({title,description}:any) {
  return (
    <div>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 max-h-60 min-h-60 flex flex-col items-center text-center sm:p-10 bg-white dark:bg-zinc-900">
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          {title}
        </p>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {description}
        </p>

        <button className="rounded-xl py-2 px-8 text-white flex items-center bg-black mt-4 dark:bg-zinc-800">
          Learn More
        </button>
      </BackgroundGradient>
    </div>
  )
}

export default FeaturedCard