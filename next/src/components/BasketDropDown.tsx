"use client";
import React, { useState, useContext } from "react";
import { BsBasket } from "react-icons/bs";
import BasketCart from "./ui/basketCart";
import { Button } from "./ui/button";
import { AppContext } from "@/components/AppContext";
import Link from "next/link";

export function BasketDropDown() {
  const appContext = useContext(AppContext);
  const cartItems = appContext ? appContext.cartItems : [];

  const [cardMenuOpen, setCardMenuOpen] = useState(false);


  const handleBasketEnter = () => {
    setCardMenuOpen(true);
  };

  const handleBasketLeave = () => {
    setCardMenuOpen(false);

    
  };

  return (
    <div onClick={handleBasketEnter} onMouseLeave={handleBasketLeave}>
      <button >
        <BsBasket className="w-[25px] h-[25px] hover:cursor-pointer" />
      </button>

      {cardMenuOpen && (
        <div
          className="z-10 absolute right-0 w-[320px] mr-2 py-2 bg-white shadow-2xl rounded"
          style={{
            boxShadow:
              "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
          }}
        >
          <div className=" flex justify-between items-center mt-5 mb-3 border-b border-[#A5DCE3] mx-2">
            <p className="font-bold text-[16px]">ORDER</p>
            <p className="text-[10px]">EDIT CART</p>
          </div>

          {cartItems !== null && cartItems.length > 0 ? (
            <>
              {cartItems.map((item, index) => (
                <BasketCart
                  key={index}
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  quantity={item.quantity}
                
                />
              ))}

              {/* Checkout button and price info */}
              <div className="pt-6">
                <div className="flex justify-between items-center mx-2">
                  <p className="text-[14px] font-bold text-[#444646]">
                    Subtotal:
                  </p>
                  <p className="text-[15px] font-bold text-[#6D706F]">$10.00</p>
                </div>
                <div className="flex justify-between items-center mx-2">
                  <p className="text-[14px] font-bold text-[#444646]">
                    Tax (20%):
                  </p>
                  <p className="text-[15px] font-bold text-[#6D706F]">$10.00</p>
                </div>
                <div className="flex justify-between items-center mx-2 mb-4">
                  <p className="text-[17px] font-bold text-[#1F2020]">Total:</p>
                  <p className="text-[20px] font-bold text-black">$10.00</p>
                </div>
              </div>
              <div className="px-2 mt-2">
                <Link href={"/cart"}>
                  <Button className="w-full">CHECKOUT</Button>
                </Link>
              </div>
            </>
          ) : (
            <p className="px-4 py-2 text-gray-800">Your cart is empty</p>
          )}
        </div>
      )}
    </div>
  );
}
