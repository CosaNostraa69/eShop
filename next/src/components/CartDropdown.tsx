"use client"
import React, { useState } from "react";
import { BsBasket } from "react-icons/bs";


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
        <div className="z-10 absolute right-0 w-80 mt-2 py-2 bg-white border rounded shadow-xl">
          <p className="px-4 py-2 text-gray-800">Your cart is empty</p>
          {/* You can map over the cart items here */}
        </div>
      )}
    </div>
  );
}
