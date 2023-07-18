import React from "react";
import { MdOutlineCopyright } from "react-icons/md";
import Link from "next/link";
export default function Footer() {
  return (
    <div className=" h-[20vh] bg-project-red text-white flex items-center justify-evenly">
      <p className="flex items-center gap-2">
        <MdOutlineCopyright />
        2023 Dynamo™
      </p>
      <nav className="flex flex-col sm:flex-row items-center sm:gap-12">
        <Link href={"/home"}>Home</Link>
        <Link href={"/api/products"}>Products</Link>
        <Link href={"/about-us"}>About Us</Link>
        <Link href={"/contact"}>Contact</Link>
      </nav>
    </div>
  );
}
