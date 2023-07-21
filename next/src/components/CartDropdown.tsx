"use client"
import React, { useState } from "react";
import { BsBasket } from "react-icons/bs";
import BasketCard from "./ui/basketCard";


export function CartDropdown() {
  const [cardMenuOpen, setCardMenuOpen] = useState(false);

  const handleBasketClick = () => {
    setCardMenuOpen(!cardMenuOpen);
  };

  return (
    <div>
      <button onClick={handleBasketClick}>
        <BsBasket className=" w-[25px] h-[25px] hover:cursor-pointer" />
      </button>
      
      {cardMenuOpen && (
        <div className="z-10 absolute right-0 w-[320px] mr-2 py-2 bg-white shadow-2xl rounded]" style={{boxShadow:"rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"}}>
          {/* You can map over the cart items here */}
          <BasketCard/>
        </div>
      )}
    </div>
  );
}

