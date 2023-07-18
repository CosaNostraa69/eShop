"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { MdKeyboardBackspace } from "react-icons/md";
import { Button } from "./ui/button";

export default function Back() {
  const router = useRouter();
  return (
    <div className="w-full justify-between">
      <Button
        className="my-2 ml-4"
        onClick={(e) => {
          e.preventDefault();
          router.back();
        }}
      >
        <MdKeyboardBackspace />
        Go Back
      </Button>
    </div>
  );
}
