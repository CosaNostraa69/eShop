import Back from "@/components/Back";
import React from "react";
import Image from "next/image";

export default function Page() {
  return ( 
    <>
      <div>
        {/* <Back /> */}
        <div className="relative w-full py-52 ">
            <Image src="/assets/aboutus.jpg" alt="about us hero banner" layout="fill" objectFit="cover" />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 flex flex-col items-center justify-center">
              <p className="text-white font-bold lg:text-6xl text-4xl ">About Us</p>
              <p className="text-white mt-12 md:text-xl text-sm text-center">Shop with confidence and explore our wide <br /> range of products today!</p>
            </div>
        </div>
      </div>
      
      <div className="p-5">
        <div className=" border rounded-sm flex">
          <div className="w-1/2 p-2">
            <Image src='/assets/about-us-1.webp' alt="5 womens are building their world" width={250} height={100}  objectFit="cover" />
          </div>
          <div className="w-1/2 flex flex-col my-auto pr-5">
            <p >We are a premier online shop dedicated to providing a diverse range of high-quality products to our valued customers. </p>
            <button className="bg-black w-20 text-white rounded-sm mt-3 mx-auto p-1 text-xs	">Explore</button>
          </div>
        </div>

      </div>
    
    </>

 



  );
}
