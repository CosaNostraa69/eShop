import Back from "@/components/Back";
// import { ToastSimple } from "@/components/ToastSimple";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MdSmokingRooms, MdNewspaper } from "react-icons/md";
import { GiWrappedSweet } from "react-icons/gi";
import { BiSolidDrink } from "react-icons/bi";
import { SlOptions } from "react-icons/sl";

export default function Home(){  

  return (
    <div className="flex flex-col items-center">

      <Back />
      <div className="w-full flex flex-col items-center py-24 bg-project-yellow">
        <h1 className="w-2/3 text-center text-5xl font-bold">
          Discover the Rich World of Fine Tobacco at our E-Shop!
        </h1>
        <Button className="my-12">Discover more...</Button>
      </div>
      <div
        className="w-full flex flex-col md:flex-row md:flex-wrap justify-center gap-y-12 py-12 shadow-md sm:shadow-none
      "
      >
        {categories.map((category) => {
          return (
            <div
              key={category.text}
              className="flex flex-col w-full md:px-6 md:w-1/2 lg:w-1/5 items-center gap-4 text-center"
            >
              {category.icon}
              <h3 className="text-2xl font-bold">{category.title}</h3>
              <p className="w-2/3 sm:w-full">{category.text}</p>
            </div>
          );
        })}
      </div>
      <ul className="flex flex-col items-center gap-6  p-12   sm:pt-0">
        <h2 className="text-4xl font-bold">Get inspired</h2>
        {content.map((category, index) => (
          <li
            key={category.title}
            className={`flex flex-col ${
              index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
            } items-center justify-around p-6 gap-12 drop-shadow-[35px_35px_35px_rgba(0,0,0,0.25)]`}
          >
            <Image
              className="grayscale aspect-[4/3] object-cover"
              src={`/assets/${category.src}`}
              width={600}
              height={600}
              alt={`${category.title} picture`}
            ></Image>
            <div className="w-2/3 flex flex-col items-center gap-6">
              <h2 className="text-3xl font-bold">{category.title}</h2>
              <p className="text-center w-full md:w-2/3">
                {category.description}
              </p>
              <Button>See more...</Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

const content: { title: string; src: string; description: string }[] = [
  {
    title: "Newspapers",
    src: "newspaper.webp",
    description:
      "Uncover the world's stories, stay informed with our trusted newsPapper. From breaking news to captivating features, we empower you with knowledge.",
  },
  {
    title: "Drinks",
    src: "drinks.webp",
    description:
      "In the artistry of mixology, libations come alive, infusing the palate with a symphony of flavors, unveiling stories and shared experiences with every sip.",
  },
  {
    title: "Cigarettes",
    src: "cigarettes.webp",
    description:
      "A momentary pleasure shrouded in smoke, a reminder that some indulgences are best left behind.",
  },
  {
    title: "Sweets",
    src: "sweets.webp",
    description:
      "Sweetness dances upon the tongue, a blissful symphony that delights the senses and brings joy to the soul",
  },
];
const categories: { title: string; icon: any; text: string }[] = [
  {
    title: "Nicotine",
    icon: <MdSmokingRooms className="w-[30px] h-[30px]" />,
    text: "Unveiling an Exquisite Collection of Tobacco Delights",
  },
  {
    title: "Newspapers",
    icon: <MdNewspaper className="w-[30px] h-[30px]" />,
    text: "Informed minds thrive with the power of printed news.",
  },
  {
    title: "Sweets",
    icon: <GiWrappedSweet className="w-[30px] h-[30px]" />,
    text: "Indulge in sugary delights that sweeten life's every moment.",
  },
  {
    title: "Drinks",
    icon: <BiSolidDrink className="w-[30px] h-[30px]" />,
    text: "Quench your thirst with a symphony of refreshing liquid libations.",
  },
  {
    title: "Other",
    icon: <SlOptions className="w-[30px] h-[30px]" />,
    text: "possibilities flourish beyond imagination's boundaries.",
  },
];
