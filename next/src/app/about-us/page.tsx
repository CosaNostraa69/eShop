import Back from "@/components/Back";
import React from "react";
import Image from "next/image";
import { BsEye } from "react-icons/bs";

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
      
      <div className="p-5 md:mx-12 lg:mx-20 xl:mx-32 pb-28">

        <div className="flex items-center flex-col sm:flex-row sm:mt-6">
          <div className="w-1/2 p-2">
            <Image src='/assets/aboutus-2.jpg' alt="5 womens are building their world" width={250} height={100}  objectFit="cover" className="lg:w-[300px] xl:w-[400px] rounded-md shadow-2xl " />
          </div>
          <div className="w-1/2 flex flex-col sm:my-auto sm:pr-5 text-center sm:text-start mt-3 ">
            <p >We are a premier online shop dedicated to providing a diverse range of high-quality products to our valued customers, With a focus on customer satisfaction, we offer a convenient and reliable shopping experience for all your needs.  </p>
            <button className="bg-black  text-white rounded-sm mt-5 mx-auto py-2 px-4 text-xs lg:py-3 lg:px-8 hover:scale-105 duration-200">Explore</button>
          </div>
        </div>

        <h1 className="mt-20 text-center font-bold text-2xl	lg:text-3xl">Get to know us better...</h1>
        <div className="flex gap-8 flex-wrap justify-center mt-12 ">
          
          <div className="shadow-2xl w-64 flex flex-col rounded-sm items-center h-[400px]">
            <div className="w-64 h-32 bg-black rounded-sm">
              <Image src='/assets/aboutus-card-1.jpg' alt="A picture of smoke with balck background" width={100} height={100} objectFit="cover" className="w-64 h-32"/>
            </div>
            <div className="px-4 pt-4 text-center">
              <p className="text-lg font-semibold mb-2">Our Premium Nicotine Selection</p>
              <p className="text-xs">Discover our carefully curated collection of premium nicotine products, including a wide range of e-liquids with various flavors and strengths, and high-quality vape devices. Whether you're an experienced enthusiast or new to vaping, our knowledgeable staff is here to assist you in finding the perfect fit for a satisfying vaping experience.</p>
            </div>
            <span className="mb-1 mt-auto ml-auto mr-2 flex items-center" >
                <BsEye className="text-[12px]"/>
                <p className="text-[8px] ml-1 font-semibold">16,1k</p>
            </span>
          </div>

          <div className="shadow-2xl w-64 flex flex-col rounded-sm items-center h-[400px]">
            <div className="w-64 h-32 bg-black rounded-sm">
            <Image src='/assets/aboutus-card-2.jpg' alt="A picture of smoke with balck background" width={100} height={100} objectFit="cover" className="w-64 h-32"/>
            </div>
            <div className="p-4 text-center">
              <p className="text-lg font-semibold mb-2">Delightful Drinks and Treats</p>
              <p className="text-xs">Quench your thirst with a variety of energizing cold brews, smoothies, and artisanal teas. Pair your drinks with mouthwatering sweets, from candies to chocolates. Treat yourself to a delightful experience with our diverse selection of beverages and treats.</p>
            </div>
            <span className="mb-1 mt-auto ml-auto mr-2 flex items-center" >
                <BsEye className="text-[12px]"/>
                <p className="text-[8px] ml-1 font-semibold">12,7k</p>
            </span>
          </div>

          <div className="shadow-2xl w-64 flex flex-col rounded-sm items-center h-[400px]">
            <div className="w-64 h-32 bg-black rounded-sm">
            <Image src='/assets/aboutus-card-3.jpg' alt="A picture of smoke with balck background" width={100} height={100} objectFit="cover" className="w-64 h-32"/>
            </div>
            <div className="p-4 text-center">
              <p className="text-lg font-semibold mb-2">Stay Informed with Daily News</p>
              <p className="text-xs">Stay connected with the latest happenings around the world. Explore newspapers and magazines offering news, thought-provoking articles, and captivating stories. Relax in our reading corner while staying informed and entertained.</p>
            </div>
            <span className="mb-1 mt-auto ml-auto mr-2 flex items-center" >
                <BsEye className="text-[12px]"/>
                <p className="text-[8px] ml-1 font-semibold">9,8k</p>
            </span>
          </div>

          <div className="shadow-2xl w-64 flex flex-col rounded-sm items-center h-[400px]">
            <div className="w-64 h-32 bg-black rounded-sm">
            <Image src='/assets/aboutus-card-4.jpg' alt="A picture of smoke with balck background" width={100} height={100} objectFit="cover" className="w-64 h-32"/>
            </div>
            <div className="p-4 text-center">
              <p className="text-lg font-semibold mb-2">Discover Unique Finds and More</p>
              <p className="text-xs">Explore a collection of unique finds and surprising treasures. From intriguing accessories to quirky gadgets, our ever-changing display offers delightful products you won't find elsewhere. Embrace the excitement of discovering extraordinary items.</p>
            </div>
            <span className="mb-1 mt-auto ml-auto mr-2 flex items-center" >
                <BsEye className="text-[12px]"/>
                <p className="text-[8px] ml-1 font-semibold">10,4k</p>
            </span>
          </div>        

        </div>
      </div>
    
    </>

 



  );
}
