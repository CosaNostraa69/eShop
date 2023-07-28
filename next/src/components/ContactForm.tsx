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
import { useToast } from "@/components/ui/use-toast";

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
  message: z.string().max(255, {
    message: "Tell us what is it about.",
  }),
});

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  });
  const { toast } = useToast();

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: `${values.firstName}, votre message a bien été envoyé!`,
      description: "Nous reviendrons bientôt vers vous.",
    });
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
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Please tell us what your is your message about"
                  {...field}
                ></Textarea>
              </FormControl>
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
