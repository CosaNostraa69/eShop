"use client";
import React from "react";
import Back from "@/components/Back";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

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
      {/* <ProductCard data={data} /> */}
    </div>
  );
}

export function ProductCard(data: any) {
  return (
    <>
      <Card className="w-[400px] h-[auto] m-4 shadow-md my-20">
        <CardHeader>
          <CardTitle className="mb-2">{data.data.name}</CardTitle>
          <div className="flex gap-6">
            <CardDescription>{data.data.category}</CardDescription>
            <CardDescription>{data.data.product_type}</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <div className="w-full flex justify-center my-6">
            <Image
              src={`/assets/${data.data.src}`}
              width={200}
              height={200}
              alt={`${data.data.name} product picture`}
              className="object-fill w-[200px] h-[150px]"
              // style={{ objectFit: "cover" }}
            ></Image>
          </div>
          <p>
            <span className="font-bold">Description:</span>
            <br />
            {data.data.description}
          </p>

          <div className="flex flex-col space-y-1.5 my-6">
            <div>
              <Label htmlFor="quantity">Quantity</Label>
              <Input
                disabled={!data.data.available}
                name="quantity"
                type="number"
                min={1}
                max={data.data.stock}
                placeholder="your desired quantity"
              />
            </div>
            <div className="max-w-40">
              {data.data.available == true ? (
                <Badge>Available</Badge>
              ) : (
                <Badge variant="outline">Not available</Badge>
              )}
            </div>
          </div>
        </CardContent>
        <CardFooter className="w-full flex items-center justify-around">
          <h4 className="font-semibold text-2xl my-4">{data.data.price}€</h4>
          <Button disabled={!data.data.available}>
            {data.data.available == true ? <p>Add to cart</p> : <p>Sold out</p>}
          </Button>
        </CardFooter>
      </Card>
    </>
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
