"use client";
import { Button } from "@/components/ui/button";
import { NavigationMenuDemo } from "./NavigationMenu";
import { MdMenu } from "react-icons/md";
import { Input } from "@/components/ui/input";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { VT323 } from "next/font/google";
import Link from "next/link";
import { BasketDropDown } from "./BasketDropDown";
import Breadcrumbs from "./Breadcrumbs";
const roboto = VT323({ subsets: ["latin"], weight: ["400"] });

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Function to handle the scroll event
    const handleScroll = () => {
      // Check the scroll position to decide whether to apply the yellow background or not
      const shouldHaveYellowBackground = window.scrollY > 0;
      setIsScrolled(shouldHaveYellowBackground);
    };

    // Add the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div
        className={`fixed top-0 left-0 w-full z-50 shadow-md flex items-center justify-between py-2 px-6 md:px-10  ${isScrolled ? "bg-slate-900 py-2" : "bg-white"}`}
       >
        <Link
          href={"/"}
          className={`w-1/3 text-2xl md:text-4xl font-semibold ${roboto.className} ${isScrolled ? "text-white" : "text-black"}`}
        >
          Ze market
        </Link>
        <div className="w-1/3">
          <NavigationMenuDemo/>
        </div>
        <div className={`flex items-center justify-end w-1/3 ${isScrolled ? "text-[#2A774C]" : "text-black"}`}>
          <BasketDropDown />
          <MdMenu className="sm:invisible w-[25px] h-[25px] ml-2 sm:ml-0 hover:cursor-pointer" />
        </div>
      </div>

      <div className="mt-[3.4rem]">
        <Promo/>
        <SearchBar />
        <Breadcrumbs/>
      </div>
    </div>
  );
}

export function Promo() {
  return (
    <div className="bg-slate-900 text-project-gray w-full py-[12px] overflow-hidden">
      <style>
        {`
          @keyframes promoAnimation {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
        
          .promo-text {
            animation: promoAnimation 15s linear infinite;
          }
        
          .promo-text::after {
            content: attr(data-text);
            position: absolute;
            top: 0;
            left: 100%;
            white-space: nowrap;
            animation: none; /* Disable animation for the pseudo-element */

          }
        `}
      </style>

      <p
        className="promo-text text-project-gray whitespace-nowrap"
        data-text='-20% with the promo code "DYNAMO" only until 29 July 2023'
      >
        -20% with the promo code DYNAMO only until 29 July 2023
      </p>
    </div>
  );
}

export function SearchBar() {
  const router = useRouter();
  const [select, setSelect] = useState("");
  const [input, setInput] = useState("");
  function handleSelectValueChange(value: any) {
    setSelect(value);
  }

  return (
    <div className="w-full py-[8px] flex justify-center shadow-sm">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          router.push(`/api/products?type=${select}&search=${input}`);
        }}
        action="#"
        className="flex gap-6 items-center "
      >
        <select
          onChange={(e) => {
            handleSelectValueChange(e.target.value);
          }}
          required
          name="categories"
          id="categories-select"
          className="hover:cursor-pointer hover:ring-1 p-2 rounded-[2px] ring-slate-400 hover:duration-200"
        >
          <option value="">Category</option>
          <option value="Cigarettes">Cigarettes</option>
          <option value="Boissons">Drinks</option>
          <option value="Gâteaux et bonbons">Sweets</option>
          <option value="Journaux et magazines">Newspapers</option>
        </select>
        <Input
          onChange={(e) => {
            setInput(e.target.value);
          }}
          required
          className="w-1/3 sm:w-[300px]"
          type="text"
          placeholder="your search"
        />
        <Button type="submit">Search</Button>
      </form>
    </div>
  );
}
