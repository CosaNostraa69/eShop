"use client";
"use client"
import React from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Breadcrumbs() {
  const router = useRouter();
  const pathname = usePathname();

  const pathSegments = pathname.split("/").filter((segment) => segment !== "");
  const isFirstSegmentApi = pathSegments.length > 0 && pathSegments[0] === "api";
  const filteredSegments = isFirstSegmentApi ? pathSegments.slice(1) : pathSegments;

  if(pathname === "/"){
    return null;
  }

  const getCategoryLabel = (category: any) => {
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


  return (
    <div className="flex items-center w-full p-1 pl-6 shadow-2xl">
      <Link
        href="/"
        className="cursor-pointer opacity-75 text-sm p-2 hover:underline hover:text-slate-400 hover:duration-200"
      >
        Home
      </Link>
      {filteredSegments.map((segment, index) => (
        <span key={index}>
          {" > "}
          {index === filteredSegments.length - 1 ? ( // Check if it's the last segment
            <span className="opacity-75 text-sm p-2">{getCategoryLabel(segment)}</span>
          ) : (
            <span
              onClick={() => router.push(`/${filteredSegments.slice(0, index + 1).join("/")}`)}
              className="cursor-pointer opacity-75 text-sm p-2 hover:underline hover:text-slate-400 hover:duration-200"
            >
              {getCategoryLabel(segment)}
            </span>
          )}
        </span>
      ))}
    </div>
  );
}
