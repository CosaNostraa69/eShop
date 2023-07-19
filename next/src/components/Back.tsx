"use client";
import React from "react";
import { MdKeyboardBackspace } from "react-icons/md";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Back() {
  const router = useRouter()
  const pathname = usePathname()
  return (
    <div className="w-full justify-between p-2">

       <a href={pathname}>{pathname}</a>
          
    </div>
  );
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