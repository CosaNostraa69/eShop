"use client";
import React from "react";
import { MdKeyboardBackspace } from "react-icons/md";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import Link from "next/link";
export default function Back() {
  const router = useRouter();
  let pathname = usePathname();

  const pathnameWithoutSlash = pathname.slice(1);

  if (pathnameWithoutSlash == "") {
    return;
  } else {
    return (
      <div className="w-full p-1 pl-6">
        <Link
          className="opacity-75 text-sm p-2 hover:underline hover:text-slate-400 hover:duration-200"
          href="/"
        >
          Home
        </Link>
        <Link href={pathname} className="opacity-75 text-sm">
          &lt;{" "}
          <span className="p-1 hover:underline hover:text-slate-400 hover:duration-200">
            {pathnameWithoutSlash}
          </span>
        </Link>
      </div>
    );
  }
}

// <Button
//         className="my-2 ml-4"
//         onClick={(e) => {
//           e.preventDefault();
//           router.back();
//         }}
//       >
//         <MdKeyboardBackspace />
//         Go Back
//       </Button>
