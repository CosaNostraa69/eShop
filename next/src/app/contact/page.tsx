import React from "react";
import { ContactForm } from "@/components/ContactForm";
export default function Page() {
  return (
    <>
      <div className="w-full min-h-screen flex flex-col items-center gap-12 py-12 px-6 mt-[230px]">
        <h1 className="text-4xl font-bold">Contact Page</h1>
        <h2 className="text-xl text-center">
          If you wish to contact us, you can contat us by filling to following
          form :
        </h2>
        <ContactForm />
      </div>
    </>
  );
}
