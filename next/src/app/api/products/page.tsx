"use client";
import React, { useState, useEffect } from "react";
import Back from "@/components/Back";
import { useSearchParams } from "next/navigation";
import ProductCard from "@/components/ProductCard";
// import { Checkbox } from "@/components/ui/checkbox";
import Loading from "@/app/loading";
import { Skeleton } from "@/components/ui/skeleton";

import axios from "axios";
import Link from "next/link";

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
  const [selectedCategories, setSelectedCategories] = useState([]);

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

  const handleCheckboxChange = (category) => {
    setSelectedCategories((prevSelectedCategories) => {
      if (prevSelectedCategories.includes(category)) {
        return prevSelectedCategories.filter((cat) => cat !== category);
      } else {
        return [...prevSelectedCategories, category];
      }
    });
    console.log(selectedCategories);
  };

  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  const search = searchParams.get("search");

  // Conditional rendering: Display a loading message or fallback if products are not available yet
  if (products["hydra:member"] === undefined) {
    return (
      <div className="flex flex-col lg:flex-row items-center space-x-4">
        <div className="w-full lg:w-1/4 lg:min-h-screen flex flew-row  justify-center lg:flex-col lg:justify-start gap-6 lg:gap-12 p-6 lg:p-0 lg:pl-20 lg:pt-20 m-6">
          <Skeleton className="font-bold text-md lg:text-xl w-[200px] h-[50px]" />
          <ul className="flex flex-row flex-wrap gap-6 lg:gap-0 items-center lg:flex-col lg:items-start ">
            <Skeleton className="w-[200px] h-[25px]" />
            <Skeleton className="w-[200px] h-[25px]" />
            <Skeleton className="w-[200px] h-[25px]" />
            <Skeleton className="w-[200px] h-[25px]" />
            <Skeleton className="w-[200px] h-[25px]" />
          </ul>
        </div>
        <div className="flex flex-col items-center lg:w-3/4">
          <h1 className="text-3xl font-bold my-6">
            Please wait while the content is loading
          </h1>
          <Skeleton className="w-full justify-center flex flex-wrap">
            <Skeleton className="w-[300px] h-[600px]" />
          </Skeleton>
        </div>
      </div>
    );
  }

  const list = products["hydra:member"];
  // console.log(`LIST: --- ${list[0].category}`);
  console.log(list);

  const filteredProducts = list.filter((product) => {
    // console.log(product.ProductType);
    // console.log(product);
    // console.log(`PRODUCT: --- ${product}`);

    if (selectedCategories.length === 0) {
      return true; // Show all products when no checkbox is selected
    } else {
      // return selectedCategories.includes(product.ProductType);
      return selectedCategories.includes(product.category.name);
    }
  });
  // console.log(filteredProducts);

  const typeFilteredProducts = type
    ? filteredProducts.filter((product) => product.category.name === type)
    : filteredProducts;

  return (
    <div className="flex flex-col lg:flex-row lg:flex-nowrap">
      <div className="w-full lg:w-1/4 lg:min-h-screen flex flew-row  justify-center lg:flex-col lg:justify-start gap-6 lg:gap-12 p-6 lg:p-0 lg:pl-20 lg:pt-20 shadow-md">
        <h3 className="font-bold text-md lg:text-xl">
          {type ? <>Others products:</> : <>Filters:</>}
        </h3>
        <ul className="flex flex-row flex-wrap gap-6 lg:gap-0 items-center lg:flex-col lg:items-start hover:duration-200">
          {type ? (
            <>
              {navigation.map((link) => {
                return (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="hover:font-bold text-project-gray hover:text-black"
                  >
                    <span
                      className={`${
                        link.category == type && "font-bold text-black"
                      }`}
                    >
                      {link.title}
                    </span>
                  </Link>
                );
              })}
            </>
          ) : (
            <>
              {categories.map((category) => {
                return (
                  <li key={category} className="flex gap-2 items-center">
                    <span className="lg:w-[100px] text-sm">{category}</span>
                    <Checkbox
                      id={category}
                      checked={selectedCategories.includes(category)}
                      onChange={() => handleCheckboxChange(category)}
                    />
                  </li>
                );
              })}
            </>
          )}
        </ul>
      </div>
      <div className="flex flex-col lg:w-3/4">
        <Back />
        {type ? (
          <div className="w-full justify-center flex flex-wrap">
            {typeFilteredProducts.map((card) => {
              return <ProductCard key={card.id} data={card} />;
            })}
          </div>
        ) : (
          <div className="w-full justify-center flex flex-wrap">
            {filteredProducts.map((card) => {
              return <ProductCard key={card.id} data={card} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export const Checkbox = ({ id, checked, onChange }) => {
  return (
    <input
      type="checkbox"
      id={id}
      checked={checked}
      onChange={() => onChange()}
    />
  );
};

// const categories = ["Tabac", "Presse", "Confiserie", "Accessoires", "other"];
const categories = [
  "Cigarettes",
  "Journaux et magazines",
  "Gâteaux et bonbons",
  "Objets divers liés au tabac",
  "Boissons",
];

const navigation: { title: string; href: string; category: string }[] = [
  {
    title: "All products",
    href: "/api/products",
    category: "",
  },
  {
    title: "Cigarettes",
    href: "/api/products?type=Cigarettes",
    category: "Cigarettes",
  },
  {
    title: "Newspapers",
    href: "/api/products?type=Journaux et magazines",
    category: "Journaux et magazines",
  },
  {
    title: "Sweets",
    href: "/api/products?type=Gâteaux et bonbons",
    category: "Gâteaux et bonbons",
  },
  {
    title: "Drinks",
    href: "/api/products?type=Boissons",
    category: "Boissons",
  },
  {
    title: "Other",
    href: "/api/products?type=Objets divers liés au tabac",
    category: "",
  },
];
