import Back from "@/components/Breadcrumbs";
import React from "react";
import Image from "next/image";
import ArticleCard from "@/components/ArticleCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Page() {
  return (
    <>
      <div>
        <Back />
        <div className="relative w-full py-52 ">
          <Image
            src="/assets/about-us/aboutus.webp"
            alt="about us hero banner"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 flex flex-col items-center justify-center">
            <p className="text-white font-bold lg:text-6xl text-4xl ">
              About Us
            </p>
            <p className="text-white mt-12 md:text-xl text-sm text-center">
              Shop with confidence and explore our wide <br /> range of products
              today!
            </p>
          </div>
        </div>
      </div>

      <div className="p-5 md:mx-12 lg:mx-20 xl:mx-32 pb-28">
        <div className="flex items-center flex-col sm:flex-row sm:mt-6">
          <div className="w-1/2 p-2">
            <Image
              src="/assets/about-us/aboutus-2.webp"
              alt="5 womens are building their world"
              width={250}
              height={100}
              objectFit="cover"
              className="lg:w-[300px] xl:w-[400px] rounded-md shadow-2xl "
            />
          </div>
          <div className="w-1/2 flex flex-col sm:my-auto sm:pr-5 text-center sm:text-start mt-3 ">
            <p>
              We are a premier online shop dedicated to providing a diverse
              range of high-quality products to our valued customers, With a
              focus on customer satisfaction, we offer a convenient and reliable
              shopping experience for all your needs.
            </p>
            <Link href={"/api/products"}>
              <Button className="bg-black  text-white rounded-sm mt-5 mx-auto py-2 px-4 text-xs lg:py-3 lg:px-8 hover:scale-105 duration-200">
                Explore
              </Button>
            </Link>
          </div>
        </div>

        <h1 className="mt-20 text-center font-bold text-2xl	lg:text-3xl">
          Get to know us better...
        </h1>
        <div className="flex gap-8 flex-wrap justify-center mt-12 ">
          {articles.map((article) => {
            return <ArticleCard key={article.title} data={article} />;
          })}
        </div>
      </div>
    </>
  );
}

const articles = [
  {
    src: "aboutus-card-1.webp",
    title: "Our Premium Nicotine Selection",
    text: "Discover our carefully curated collection of premium nicotine products, including a wide range of e-liquids with various flavors and strengths, and high-quality vape devices. Whether you're an experienced enthusiast or new to vaping, our knowledgeable staff is here to assist you in finding the perfect fit for a satisfying vaping experience.",
    views: "16,1",
  },
  {
    src: "aboutus-card-2.webp",
    title: "Delightful Drinks and Treats",
    text: "Quench your thirst with a variety of energizing cold brews, smoothies, and artisanal teas. Pair your drinks with mouthwatering sweets, from candies to chocolates. Treat yourself to a delightful experience with our diverse selection of beverages and treats.",
    views: "12,7",
  },
  {
    src: "aboutus-card-3.webp",
    title: "Stay Informed with Daily News",
    text: "Stay connected with the latest happenings around the world. Explore newspapers and magazines offering news, thought-provoking articles, and captivating stories. Relax in our reading corner while staying informed and entertained.",
    views: "9,8",
  },
  {
    src: "aboutus-card-4.webp",
    title: "Discover Unique Finds and More",
    text: "Explore a collection of unique finds and surprising treasures. From intriguing accessories to quirky gadgets, our ever-changing display offers delightful products you won't find elsewhere. Embrace the excitement of discovering extraordinary items.",
    views: "10,4",
  },
];
