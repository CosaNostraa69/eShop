"use client";
import React from "react";
import Back from "@/components/Back";
import { useSearchParams } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import axios from "axios";
import { useState, useEffect } from "react";

const BASE_URL = "http://localhost:8000";
const api = axios.create({
  baseURL: BASE_URL,
});
export async function getProducts() {
  try {
    const response = await api.get("/api/products");
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}

export default function Page() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const productsData = await getProducts();
      setProducts(productsData);
    } catch (error) {
      // Handle errors here
    }
  };
  // console.log(products["hydra:member"]);
  const list = products["hydra:member"];
  console.log(list);

  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  const search = searchParams.get("search");
  return (
    <div>
      <Back />
      {/* <p>type = {type}</p>
      <p>search = {search}</p> */}
      <div className="w-full justify-center flex flex-wrap">
        {list &&
          list.map((card) => {
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
