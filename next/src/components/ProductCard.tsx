import React from "react";
import Image from "next/image";
import { useState, useContext } from "react";
import { AppContext } from "@/components/AppContext";
import { useToast } from "@/components/ui/use-toast";
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

export default function ProductCard(data: any) {
  const [quantity, setQuantity] = useState(1);
  const appContext = useContext(AppContext);
  const { toast } = useToast();

  const handleQuantity = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = parseInt(event.target.value);
    setQuantity(inputValue);
  };

  const handleAddToCart = () => {
    if (appContext) {
      appContext.handleAddToCart(data, quantity);
      handleToastForAddToCart(toast);
    }
  };

  function handleToastForAddToCart(toastTest: any) {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleString();

    return toastTest({
      title: `${quantity} ${data.data.Name}, added to the shopping cart`,
      description: `${formattedDate}`,
    });
  }

  return (
    <>
      <Card className="w-[360px] h-[auto] m-4 shadow-md my-4">
        <CardHeader>
          <CardTitle className="mb-2">{data.data.Name}</CardTitle>
          <div className="flex gap-6">
            <CardDescription>{data.data.category.name}</CardDescription>
            <CardDescription>{data.data.ProductType}</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <div className="w-full flex justify-center">
            <Image
              src={
                data.data.picture
                  ? `http://localhost:8000/uploads/images/${data.data.picture}`
                  : "/assets/not-found-image.webp"
              }
              width={200}
              height={200}
              alt={
                data.data.picture
                  ? `${data.data.Name} product picture`
                  : `${data.data.Name} picture not found`
              }
              className="object-fill w-[150px] h-[150px] mb-4"
            ></Image>
          </div>
          <p>
            <span className="font-bold">Description:</span>
            <br />
            {data.data.Description}
          </p>

          <div className="flex flex-col space-y-1.5 mt-4">
            <div>
              <Label htmlFor="quantity">Quantity</Label>
              <Input
                disabled={!data.data.Available}
                name="quantity"
                type="number"
                min={1}
                max={data.data.Stock}
                placeholder="your desired quantity"
                value={quantity}
                onChange={handleQuantity}
              />
            </div>
            <div className="max-w-40">
              {data.data.Available == true ? (
                <Badge>available</Badge>
              ) : (
                <Badge variant="outline">Not available</Badge>
              )}
              {data.data.Stock < 15 ? (
                <p className="text-project-red h-[20px] font-bold my-4">
                  {data.data.Stock} produits restants en stock
                </p>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </CardContent>
        <CardFooter className="w-full flex items-center justify-around">
          <h4 className="font-semibold text-2xl my-4">{data.data.Price}€</h4>

          <Button onClick={handleAddToCart} disabled={!data.data.Available}>
            {data.data.Available == true ? <p>Add to cart</p> : <p>Sold out</p>}
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
