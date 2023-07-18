import Back from "@/components/Back";
// import { ToastSimple } from "@/components/ToastSimple";
import { Button } from "@/components/ui/button";
import Image from "next/image";
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

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Back />
      <div className="min-h-[80vh] flex flex-col items-center py-24 bg-project-yellow">
        <h1 className="w-2/3 text-center text-5xl font-bold">
          Discover the Rich World of Fine Tobacco at our E-Shop!
        </h1>
        <Button className="my-12">Discover more...</Button>
      </div>
      <ul className="flex flex-col gap-24 py-12">
        {content.map((category, index) => (
          <li
            key={category.title}
            className={`flex flex-col ${
              index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
            } items-center justify-around p-12 gap-12`}
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
              <p>{category.description}</p>
              <Button>See more...</Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
