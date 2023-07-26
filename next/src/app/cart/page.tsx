"use client";
import React, { useState, useEffect, useRef } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { CheckoutForm } from "@/components/CheckoutForm";

interface BasketItem {
  name: string;
  price: number;
  quantity: number;
}
interface Promotion {
  code: string;
  value: number;
  category: string;
}

interface CheckoutProps {
  finalPrice: number;
  usedPromotion: Promotion | null;
  cartDataArray: BasketItem[];
}
const BASE_URL = "http://localhost:8000";
const api = axios.create({
  baseURL: BASE_URL,
});

export async function getPromos() {
  try {
    const response = await api.get("/api/promotions");
    return response.data;
  } catch (error) {
    console.error("Error fetching promos:", error);
    throw error;
  }
}

export default function Page() {
  const [promotions, setPromotions] = useState<Promotion[]>([]);
  const [cartDataArray, setCartDataArray] = useState<BasketItem[]>([]);

  useEffect(() => {
    const fetchPromotions = async () => {
      try {
        const promotions = await getPromos();
        setPromotions(promotions["hydra:member"]);
      } catch (error) {}
    };
    fetchPromotions();
    const cartDataJSON = localStorage.getItem("cartData");
    const cartData: BasketItem[] = cartDataJSON ? JSON.parse(cartDataJSON) : [];
    setCartDataArray(Object.values(cartData));
  }, []);

  const promotionsList: Promotion[] = promotions;

  const totalPrice = cartDataArray.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
  const [promoCode, setPromoCode] = useState("");
  const [isPromoCodeValid, setPromoCodeValid] = useState(false);
  const [discountedTotalPrice, setDiscountedTotalPrice] = useState(0);
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [appliedPromotion, setAppliedPromotion] = useState<Promotion | null>(
    null
  ); // New state for applied promotion

  const handlePromoCodeChange = (event: any) => {
    setPromoCode(event.target.value);
  };

  const handleCheckCode = () => {
    const lowerCasedPromoCode = promoCode.toLowerCase();
    const validPromo = promotionsList.find(
      (promo) => promo.code.toLowerCase() === lowerCasedPromoCode
    );

    if (validPromo) {
      const discountPercentage = validPromo.value;
      const newTotalPrice =
        totalPrice - totalPrice * (discountPercentage / 100);
      setDiscountedTotalPrice(newTotalPrice);
      setAppliedDiscount(discountPercentage);
      setPromoCodeValid(true);
      setAppliedPromotion(validPromo);
    } else {
      setDiscountedTotalPrice(0);
      setAppliedDiscount(0);
      setPromoCodeValid(false);
      setAppliedPromotion(null);
    }
  };

  // console.log(appliedPromotion);
  const ref = useRef<null | HTMLElement>(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="flex flex-col items-center gap-6 py-12">
      <h1 className="text-3xl lg:text-4xl w-full justify-start p-6 font-bold">
        Cart
      </h1>
      <h2 className="text-2xl lg:text-3xl w-full justify-start p-6 font-bold">
        1. Recap
      </h2>
      <div className="w-full  flex flex-col items-center gap-6 p-6 md:flex-row">
        <div className="w-full md:w-2/3 lg:w-1/2 ">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead className="text-center">Price</TableHead>
                <TableHead className="text-center">Quantity</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {cartDataArray.map((product, index) => (
                <TableRow key={product.name}>
                  <TableCell>{product.name}</TableCell>
                  <TableCell className="text-center">
                    {product.price * product.quantity}€
                  </TableCell>
                  <TableCell className="text-center">
                    {product.quantity}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="w-full justify-center flex items-center gap-6 flex-col md:w-1/3 lg:w-1/2 md:items-center">
          <h2 className="text-2xl font-bold">Sub total: {totalPrice}€</h2>
          <div className="flex flex-col items-center text-center gap-4">
            <Label>
              Do you have a promotional code? If so, put it down here:
            </Label>
            <Input
              className="max-w-[250px]"
              type="text"
              placeholder="e.g CODE2023"
              value={promoCode}
              onChange={handlePromoCodeChange}
            />
            <Button variant={"outline"} onClick={handleCheckCode}>
              Check code
            </Button>
            {isPromoCodeValid && (
              <p className="text-green-500">
                Promo code is valid! You now have a {appliedDiscount}% discount
                on your order.
              </p>
            )}
          </div>
          {discountedTotalPrice > 0 && (
            <h2 className="text-2xl font-bold">
              Discounted total: {discountedTotalPrice}€
            </h2>
          )}
          <Button onClick={handleClick}>Checkout now</Button>
        </div>
      </div>
      <div className="w-full" ref={ref}>
        <Checkout
          finalPrice={discountedTotalPrice ? discountedTotalPrice : totalPrice}
          usedPromotion={appliedPromotion ? appliedPromotion : null}
          cartDataArray={cartDataArray}
        />
      </div>
    </div>
  );
}

export function Checkout({
  finalPrice,
  usedPromotion,
  cartDataArray,
}: CheckoutProps) {
  // console.log(finalPrice);
  // console.log(usedPromotion);
  // console.log(cartDataArray);
  return (
    <div className="w-full flex flex-col items-center gap-6 py-12">
      <h2 className="text-2xl lg:text-3xl w-full justify-start p-6 font-bold">
        2. Checkout
      </h2>
      <CheckoutForm
        finalPrice={finalPrice}
        usedPromotion={usedPromotion}
        cartDataArray={cartDataArray}
      />
    </div>
  );
}
