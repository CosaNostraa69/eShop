"use client";
import { Button } from "@/components/ui/button";
import { NavigationMenuDemo } from "./NavigationMenu";
import { MdMenu } from "react-icons/md";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { log } from "console";

export default function Header() {
  return (
    <div>
      <div
        className=" bg-white w-full flex items-center justify-between sm:justify-center   py-2 px-12
      shadow-md"
      >
        <NavigationMenuDemo />
        <MdMenu className="sm:invisible w-[25px] h-[25px] hover:cursor-pointer" />
      </div>
      <Promo />
      <SearchBar />
    </div>
  );
}

export function Promo() {
  return (
    <div className="bg-slate-900 text-project-gray w-full flex justify-center py-4">
      <p>-20% with the promo code DYNAMO</p>
    </div>
  );
}

export function SearchBar() {
  const router = useRouter();
  const [select, setSelect] = useState("");
  const [input, setInput] = useState("");
  function handleSelectValueChange(value) {
    console.log(value);
    setSelect(value);
  }
  return (
    <div className="w-full py-4 flex justify-center shadow-md">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // alert(`select : ${select} ; search ${input}`);
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
        >
          <option value="">Category</option>
          <option value="cigarettes">Cigarettes</option>
          <option value="drinks">Drinks</option>
          <option value="sweets">Sweets</option>
          <option value="newspapers">Newspapers</option>
          <option value="other">Others</option>
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