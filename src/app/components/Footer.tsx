import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="w-full text-white px-14 flex flex-col gap-10 items-center py-4">
      <div className="flex gap-40 max-sm:gap-10 justify-between flex-wrap">
        <div className="max-w-64 flex flex-col gap-3">
          <h1 className="font-semibold">About US</h1>
          <div>
            <p className="text-zinc-400">
              Music School is a premier institution dedicated to teaching the
              art and science of music. We nurture talent from the ground up,
              fostering a vibrant community of musicians.
            </p>
          </div>
        </div>
        <div className="max-w-64 flex flex-col gap-3">
          <h1 className="font-semibold">Quick Links</h1>
          <div  className="flex flex-col text-zinc-400">
            <Link href={"/"}>Home</Link>
            <Link href={"/About"}>About</Link>
            <Link href={"/courses"}>Courses</Link>
            <Link href={"/contactUs"}>Contact</Link>
          </div>
        </div>
        <div className="max-w-64 flex flex-col gap-3">
          <h1 className="font-semibold">Follow Us</h1>
          <div className="flex gap-4 text-zinc-400">
            <Link href={"#"}>Facebook</Link>
            <Link href={"#"}>Twitter</Link>
            <Link href={"#"}>Instagram</Link>
          </div>
        </div>
        <div className="max-w-64 flex flex-col gap-3">
          <h1 className="font-semibold">Contact Us</h1>
          <div className="text-zinc-400">
            <h2>Bhopal ,India</h2>
            <h2>Bhopal 486001</h2>
            <h2>Email:Akashsp9893@gmail.com</h2>
            <h2>Phone:(123) 456-7890</h2>
          </div>
        </div>
      </div>
      <h3 className="text-zinc-400">© 2024 Music School. All rights reserved.</h3>
    </div>
  );
}

export default Footer;
