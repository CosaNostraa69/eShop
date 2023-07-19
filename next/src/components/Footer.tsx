import React from "react";
import { MdOutlineCopyright } from "react-icons/md";
import {
  FaSquareTwitter,
  FaSquareYoutube,
  FaSquareFacebook,
  FaLinkedin,
} from "react-icons/fa6";
import Link from "next/link";
import { Button } from "./ui/button";
export default function Footer() {
  return (
    <div className="py-16 gap-y-12 flex flex-wrap lg:flex-nowrap items-center justify-evenly">
      <div className="w-1/2 flex flex-col items-center gap-6">
        <p className="flex items-center gap-2">
          <MdOutlineCopyright />
          2023 Dynamo™
        </p>
        <div className="flex flex-col items-center">
          <h6 className="text-lg font-bold">Stay Connected</h6>
          <p>Get all the latest news</p>
          <div className="flex items-center gap-2 m-2">
            <FaSquareTwitter className="w-[25px] h-[25px]" />
            <FaSquareFacebook className="w-[25px] h-[25px]" />
            <FaSquareYoutube className="w-[25px] h-[25px]" />
            <FaLinkedin className="w-[25px] h-[25px]" />
          </div>
        </div>
      </div>
      <div className="w-1/2 flex flex-col items-center gap-2">
        <h6 className="text-lg font-bold">E-Shop</h6>
        <nav className="flex flex-col items-center gap-2 text-sm">
          <Link href={"/home"}>Home</Link>
          <Link href={"/api/products"}>Products</Link>
          <Link href={"/about-us"}>About Us</Link>
          <Link href={"/contact"}>Contact</Link>
        </nav>
      </div>
      <div className="w-1/2 flex flex-col items-center gap-2">
        <h6 className="text-lg font-bold">Marketplace</h6>
        <nav className="flex flex-col items-center gap-2 text-sm">
          <Link href={"/api/products?type=newspapers"}>Newspapers</Link>
          <Link href={"/api/products?type=drinks"}>Drinks</Link>
          <Link href={"/api/products?type=cigarettes"}>Cigarettes</Link>
          <Link href={"/api/products?type=sweets"}>Sweets</Link>
          {/* <Link href={"/api/products?type=other"}>Others</Link>e */}
        </nav>
      </div>

      <div className="w-1/2 flex flex-col items-center gap-4">
        <h6 className="text-lg font-bold">Customer Service</h6>
        <div className="flex flex-col items-center">
          <p className="text-center">E-Shop customer service call us at:</p>
          <a className="underline" href="tel:+33756971528">
            +33756971528
          </a>
        </div>
        <Link href={"/contact"}>
          <Button>Contact Us</Button>
        </Link>
      </div>
    </div>
  );
}
