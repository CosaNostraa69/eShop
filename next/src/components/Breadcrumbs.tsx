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

  const isHome = pathSegments.length === 0;

  return (
    <div className="flex items-center w-full p-1 pl-6">
      <Link className="cursor-pointer opacity-75 text-sm p-2 hover:underline hover:text-slate-400 hover:duration-200" href={"/"}>Home</Link>
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
    </div>
  );
}
