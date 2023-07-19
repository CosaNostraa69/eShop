"use client";
import React from "react";
import { MdKeyboardBackspace } from "react-icons/md";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";


export default function Back() {
  const router = useRouter()
  let pathname = usePathname()

  const pathnameWithoutSlash = pathname.slice(1)

  if(pathnameWithoutSlash  == ""){
    return;
  }else{

    return (
      <div className="w-full p-2">
        <a className="opacity-75 text-sm" href="/">Home</a>
        <a href={pathname} className="opacity-75 text-sm"> &lt; {pathnameWithoutSlash}</a>
            
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