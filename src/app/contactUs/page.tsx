import React from "react";
import { Meteors } from ".././components/ui/meteors";

function page() {
  return (
    <div className=" w-full relative h-screen">
      <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
      <div className="relative shadow-xl bg-black border border-gray-800  px-4 py-8 h-full overflow-hidden flex flex-col justify-end items-start">
        <div className="text-white absolute w-full top-0 h-screen text-center pt-40 px-40 max-sm:px-10 gap-10 max-sm:gap-5">
          <h1 className="text-6xl font-bold uppercase max-sm:text-2xl">Contact US</h1>
          <form action="" className="flex flex-col gap-10 mt-10 max-sm:gap-5">
            <div className="flex w-full gap-10 max-sm:gap-5 max-sm:flex-col">
              <input className="rounded h-20 w-1/2 p-2 text-2xl outline-none max-sm:w-full max-sm:h-10 bg-zinc-700 max-sm:text-base" type="name" name="name" placeholder="Name" />
              <input className="rounded h-20 w-1/2 p-2 text-2xl outline-none max-sm:w-full bg-zinc-700 max-sm:h-10 max-sm:text-base" type="email" name="email" placeholder="Email" />
            </div>
            <textarea className="rounded h-40 p-2 text-2xl outline-none bg-zinc-700 max-sm:text-base" name="" id="" placeholder="write here"></textarea>
            <div className="w-full flex items-center justify-center">
            <input className="rounded cursor-pointer bg-white text-black max-sm:px-10 max-sm:py-2 max-sm:mt-10 uppercase px-10 py-3 font-bold w-fit" type="submit" value="submit" />
            </div>
          </form>
        </div>
        {/* Meaty part - Meteor effect */}
        <Meteors number={100} />
      </div>
    </div>
  );
}

export default page;
