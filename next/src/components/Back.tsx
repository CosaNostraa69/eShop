"use client"

import React from "react";
import { MdKeyboardBackspace } from "react-icons/md";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export default function Back() {
  const router = useRouter();
  const pathname = usePathname();

  const pathSegments = pathname.split("/").filter((segment) => segment !== "");

  const handleBack = () => {
    if (pathSegments.length <= 1) {
      router.push("/");
    } else {
      const previousPath = `/${pathSegments.slice(0, -1).join("/")}`;
      router.push(previousPath);
    }
  };

  const getCategoryLabel = (category) => {
    // Define custom labels for specific categories
    switch (category) {
      case "cigarettes":
        return "Cigarettes";
      case "newspapers":
        return "Newspapers";
      case "sweets":
        return "Sweets";
      case "drinks":
        return "Drinks";
      case "other":
        return "Other";
      default:
        return category;
    }
  };

  const getPageLabel = (page) => {
    // Define custom labels for specific pages
    switch (page) {
   
      case "about":
        return "About Us";
      case "contact":
        return "Contact";
      default:
        return page;
    }
  };

  const isHome = pathSegments.length <= 0;

  return (
    <div className="w-full p-1 pl-6">
      {isHome ? (
        <span className="opacity-75 text-sm p-2">Home</span>
      ) : (
        <span
          onClick={handleBack}
          className="cursor-pointer opacity-75 text-sm p-2 hover:underline hover:text-slate-400 hover:duration-200"
        >
          <MdKeyboardBackspace /> Back
        </span>
      )}

      {pathSegments.map((segment, index) => (
        <span key={index}>
          {" > "}
          <span
            onClick={() => router.push(`/${pathSegments.slice(0, index + 1).join("/")}`)}
            className="cursor-pointer opacity-75 text-sm p-2 hover:underline hover:text-slate-400 hover:duration-200"
          >
            {getCategoryLabel(segment)}
          </span>
        </span>
      ))}

      {pathname.includes("about") && (
        <>
          {" > "}
          <span className="opacity-75 text-sm p-2">About Us</span>
        </>
      )}

      {pathname.includes("contact") && (
        <>
          {" > "}
          <span className="opacity-75 text-sm p-2">Contact</span>
        </>
      )}
    </div>
  );
}