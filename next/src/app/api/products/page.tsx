"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";

interface Product {
  Available: boolean;
  Description: string;
  Name: string;
  Price: number;
  Stock: number;
  category: {
    name: string;
  };
  ProductType: string;
  id: number;
  picture: string;
}

interface CheckboxProps {
  id: string;
  checked: boolean;
  onChange: () => void;
}
interface NavigationItem {
  title: string;
  href: string;
  category: string;
}
type CheckboxChangeHandler = (category: string) => void;

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
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const productsData = await getProducts();
      setProducts(productsData["hydra:member"]);
    } catch (error) {
      console.log(`error fetching the products: ${error}`);
    }
  };

  const handleCheckboxChange: CheckboxChangeHandler = (category: string) => {
    setSelectedCategories((prevSelectedCategories: string[]) => {
      if (prevSelectedCategories.includes(category)) {
        return prevSelectedCategories.filter((cat: string) => cat !== category);
      } else {
        return [...prevSelectedCategories, category];
      }
    });
  };

  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  const search = searchParams.get("search");

  if (products === undefined) {
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
          <h1 className="text-3xl font-bold my-6 ">Page is Loading ...</h1>
          <Skeleton className="w-full justify-center flex flex-wrap">
            <Skeleton className="w-[300px] h-[600px]" />
          </Skeleton>
        </div>
      </div>
    );
  }

  const list = products;

  const filteredProducts = list.filter((product: Product) => {
    if (selectedCategories.length === 0) {
      return true;
    } else {
      return selectedCategories.includes(product.category.name);
    }
  });

  const typeFilteredProducts = type
    ? filteredProducts.filter((product) => product.category.name === type)
    : filteredProducts;

  const searchFilteredProducts = search
    ? typeFilteredProducts.filter((product) =>
        product.Name.toLowerCase().includes(search.toLowerCase())
      )
    : typeFilteredProducts;

  return (
    <div className="flex flex-col lg:flex-row lg:flex-nowrap">
      <div className="w-full lg:w-1/5 lg:min-h-screen flex flew-row justify-center lg:flex-col lg:justify-start gap-6 lg:gap-12 lg:pl-[5%] lg:pt-20 shadow-2xl ">
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
              {categories.map((category: string) => {
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
        {type ? (
          <>
            {search ? (
              <div className="w-full justify-center flex flex-wrap">
                {searchFilteredProducts.length > 0 ? (
                  <>
                    {searchFilteredProducts.map((card) => {
                      return <ProductCard key={card["id"]} data={card} />;
                    })}
                  </>
                ) : (
                  <div className="flex flex-col items-center">
                    <h1 className="text-2xl font-bold my-6">
                      Sorry, There is no product corresponding to your search.
                    </h1>
                    <Image
                      src={"/assets/sad-cat.webp"}
                      width={200}
                      height={200}
                      alt="sad cat"
                    />
                  </div>
                )}
              </div>
            ) : (
              <div className="w-full justify-center flex flex-wrap">
                {typeFilteredProducts.map((card: Product) => {
                  return <ProductCard key={card.id} data={card} />;
                })}
              </div>
            )}
          </>
        ) : (
          <div className="w-full justify-center flex flex-wrap">
            {filteredProducts.map((card: Product) => {
              return <ProductCard key={card.id} data={card} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export const Checkbox: React.FC<CheckboxProps> = ({
  id,
  checked,
  onChange,
}) => {
  return (
    <input
      type="checkbox"
      id={id}
      checked={checked}
      onChange={() => onChange()}
    />
  );
};

const categories: string[] = [
  "Cigarettes",
  "Journaux et magazines",
  "Gâteaux et bonbons",
  "Objets divers liés au tabac",
  "Boissons",
];

const navigation: NavigationItem[] = [
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
