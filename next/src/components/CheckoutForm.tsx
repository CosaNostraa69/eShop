"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";

interface BasketItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}
interface Promotion {
  id: number;
  code: string;
  value: number;
  category: string;
}
interface CheckoutProps {
  finalPrice: number;
  usedPromotion: Promotion | null;
  cartDataArray: BasketItem[];
}
const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "The first name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "The last name must be at least 2 characters.",
  }),
  email: z.string().min(2, {
    message: "Please put a valid email format.",
  }),
});

const BASE_URL = "http://localhost:8000";
const api = axios.create({
  baseURL: BASE_URL,
});

export function CheckoutForm({
  finalPrice,
  usedPromotion,
  cartDataArray,
}: CheckoutProps) {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
  });
  const router = useRouter();

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log({
      price: Number(finalPrice.toFixed(0)),
      created_at: new Date().toISOString(),
      product: cartDataArray.map((item) => "/api/products/" + item.id),
      promotion: "/api/promotions/" + usedPromotion?.id || "",
      user: {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        created_at: new Date().toISOString(),
      },
      usedCode: usedPromotion ? true : false,
    });

    try {
      console.log(usedPromotion);

      const response = await api.post(
        "/api/orders",
        {
          price: Number(finalPrice.toFixed(0)),
          created_at: new Date().toISOString(),
          product: cartDataArray.map((item) => "/api/products/" + item.id),
          promotion: usedPromotion
            ? "/api/promotions/" + usedPromotion?.id
            : null,
          user: {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            created_at: new Date().toISOString(),
          },
          usedCode: usedPromotion ? true : false,
        },
        {
          headers: {
            "Content-Type": "application/json", // Specify the Content-Type as JSON
          },
        }
      );
      console.log("Order successfully submitted:", response.data);
      router.push("/confirmation");
    } catch (error) {
      console.error("Error submitting the order:", error);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 shadow-xl  bg-white p-6  w-full md:w-4/5 lg:w-3/5 flex flex-col"
      >
        <h2 className="text-lg lg:text-xl w-full justify-start  font-bold">
          2. Checkout
        </h2>
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First name</FormLabel>
              <FormControl>
                <Input placeholder="e.g: John" {...field} />
              </FormControl>
              <FormDescription>Please enter your first name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last name</FormLabel>
              <FormControl>
                <Input placeholder="e.g: Doe" {...field} />
              </FormControl>
              <FormDescription>Please enter your last name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="e.g: john.doe@mail.com" {...field} />
              </FormControl>
              <FormDescription>Please enter your email.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="px-6 py-2 rounded-md">
          Submit
        </Button>
      </form>
    </Form>
  );
}
