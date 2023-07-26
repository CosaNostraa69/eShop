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

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    // console.log(values);
    console.log(`first name: ${values.firstName}`);
    console.log(`last name: ${values.lastName}`);
    console.log(`email: ${values.email}`);
    console.log(`prix final: ${finalPrice}`);
    console.log(`promotion utilisée: ${usedPromotion}`);
    console.log(cartDataArray);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8  w-full md:w-4/5 lg:w-3/5 flex flex-col"
      >
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
