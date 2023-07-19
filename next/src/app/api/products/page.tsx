"use client";
import React from "react";
import Back from "@/components/Back";
import { useSearchParams } from "next/navigation";
import ProductCard from "@/components/ProductCard";

export default function Page() {
  const searchParams = useSearchParams();

  const type = searchParams.get("type");
  const search = searchParams.get("search");
  const exampleQuery = `SELECT *
  FROM products
  WHERE type = '${type}' AND (name LIKE '%${search}%' OR description LIKE '%${search}%');
  `;
  return (
    <div>
      <Back />
      <h1>Liste des produits pour les filtres:</h1>
      <p>type = {type}</p>
      <p>search = {search}</p>
      <p>
        Faire la Query SQL suivante:{" "}
        <span className="text-xl font-bold">{exampleQuery}</span>
      </p>
      <div className="w-full justify-center flex flex-wrap">
        {data.map((card) => {
          return (
            <>
              <ProductCard data={card} />
            </>
          );
        })}
      </div>
    </div>
  );
}

const data = [
  {
    name: "Product name",
    description:
      "Product description Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi consectetur illum enim adipisci odio. ",
    stock: 99,
    src: "drinks.webp",
    category: "cigarettes",
    product_type: "tabac",
    price: 20,
    available: true,
  },
  {
    name: "Product name",
    description:
      "Product description Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi consectetur illum enim adipisci odio. ",
    stock: 12,
    src: "cigarettes.webp",
    category: "cigarettes",
    product_type: "tabac",
    price: 54,
    available: false,
  },
  {
    name: "Product name",
    description:
      "Product description Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi consectetur illum enim adipisci odio. ",
    stock: 4,
    src: "newspaper.webp",
    category: "cigarettes",
    product_type: "tabac",
    price: 20,
    available: true,
  },
  {
    name: "Product name",
    description:
      "Product description Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi consectetur illum enim adipisci odio. ",
    stock: 99,
    src: "sweets.webp",
    category: "cigarettes",
    product_type: "tabac",
    price: 3,
    available: true,
  },
  {
    name: "Product name",
    description:
      "Product description Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi consectetur illum enim adipisci odio. ",
    stock: 9,
    src: "drinks.webp",
    category: "cigarettes",
    product_type: "tabac",
    price: 94,
    available: false,
  },
];
