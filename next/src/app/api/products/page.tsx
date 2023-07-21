"use client";
import React, { useState, useEffect } from "react";
import Back from "@/components/Back";
import { useSearchParams } from "next/navigation";
import ProductCard from "@/components/ProductCard";
// import { Checkbox } from "@/components/ui/checkbox";

import axios from "axios";

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
    return <div>Loading products...</div>;
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

  return (
    <div className="flex flex-col lg:flex-row lg:flex-nowrap">
      <div className="w-full lg:w-1/4 lg:min-h-screen flex flew-row  justify-center lg:flex-col lg:justify-start gap-6 lg:gap-12 p-6 lg:p-0 lg:pl-20 lg:pt-20 shadow-md">
        <h3 className="font-bold text-md lg:text-xl">Filters:</h3>
        <ul className="flex flex-row flex-wrap gap-6 lg:gap-0 items-center lg:flex-col lg:items-start">
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
        </ul>
      </div>
      <div className="flex flex-col lg:w-3/4">
        <Back />
        <div className="w-full justify-center flex flex-wrap">
          {filteredProducts.map((card) => {
            return <ProductCard key={card.id} data={card} />;
          })}
        </div>
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

// Rest of the code remains the same
