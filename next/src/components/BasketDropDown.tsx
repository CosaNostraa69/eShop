"use client";
import React, { useState, useContext } from "react";
import { BsBasket } from "react-icons/bs";
import BasketCart from "./ui/basketCart";
import { Button } from "./ui/button";
import { AppContext } from "@/components/AppContext";
import Link from "next/link";

export function BasketDropDown() {
  const [cardMenuOpen, setCardMenuOpen] = useState(false);

  const appContext = useContext(AppContext);
  const cartItems = appContext ? appContext.cartItems : [];
  let totalPrice = appContext ? appContext.calculateTotalPrice() : 0;

  // const taxPercentage = 0.12;
  // Calculate the tax amount
  // const taxAmount = totalPrice * taxPercentage;
  const taxAmount = totalPrice * 1.12 - totalPrice;
  // console.log(taxAmount);

  totalPrice = taxAmount + totalPrice;
  // console.log(totalPrice);
  const subTotal = totalPrice - taxAmount;

  const handleBasketClick = () => {
    setCardMenuOpen(!cardMenuOpen);
  };
  const handleBasketEnter = () => {
    setCardMenuOpen(true);
  };
  const handleBasketLeave = () => {
    setCardMenuOpen(false);
  };

  return (
    <div onClick={handleBasketEnter} onMouseLeave={handleBasketLeave}>
      <div className="relative">
        <button>
          <BsBasket className="w-[25px] h-[25px] hover:cursor-pointer relative" />
        </button>

        {cartItems.length > 0 && (
          <div className="bg-[#C7C33C] absolute top-[-5px] left-[7px] w-[12px] h-[12px] rounded-full"></div>
        )}
      </div>

      {cardMenuOpen && (
        <div
          className="z-10 absolute right-0 w-[340px] mr-2 py-2 px-2 bg-white shadow-2xl rounded"
          style={{
            boxShadow:
              "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
          }}
        >
          <div className=" flex justify-between items-center mt-5 mb-3 border-b border-[#A5DCE3] mx-2">
            <p className="font-bold text-[16px]">ORDER</p>
            <p className="text-[10px]">Price for each item</p>
          </div>

          {cartItems !== null && cartItems.length > 0 ? (
            <>
              {cartItems.map((item, index) => (
                <BasketCart
                  key={index}
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  image={item.image}
                  quantity={item.quantity}
                />
              ))}

              {/* Checkout button and price info */}
              <div className="pt-6">
                <div className="flex justify-between items-center mx-2">
                  <p className="text-[14px] font-bold text-[#444646]">
                    Subtotal:
                  </p>
                  <p className="text-[15px] font-bold text-[#6D706F]">
                    ${subTotal.toFixed(2)}€
                  </p>
                </div>
                <div className="flex justify-between items-center mx-2">
                  <p className="text-[14px] font-bold text-[#444646]">
                    Tax (12%):
                  </p>
                  <p className="text-[15px] font-bold text-[#6D706F]">
                    {taxAmount.toFixed(2)}€
                  </p>
                </div>
                <div className="flex justify-between items-center mx-2 mb-4">
                  <p className="text-[17px] font-bold text-[#1F2020]">Total:</p>
                  <p className="text-[20px] font-bold text-black">
                    {totalPrice.toFixed(2)}€
                  </p>
                </div>
              </div>
              <div className="px-2 mt-2">
                <Link href={"/cart"}>
                  <Button className="w-full mb-2">CHECKOUT</Button>
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
