import Image from "next/image";
import { BsEye } from "react-icons/bs";

export default function ArticleCard(data: any) {
  return (
    <div className="shadow-2xl w-64 flex flex-col rounded-sm items-center h-[400px]">
      <div className="w-64 h-32 bg-black rounded-sm">
        <Image
          src={`/assets/about-us/${data.data.src}`}
          alt="A picture of smoke with balck background"
          width={100}
          height={100}
          objectFit="cover"
          className="w-64 h-32"
        />
      </div>
      <div className="p-4 text-center">
        <p className="text-lg font-semibold mb-2">{data.data.title}</p>
        <p className="text-xs">{data.data.text}</p>
      </div>
      <span className="mb-1 mt-auto ml-auto mr-2 flex items-center">
        <BsEye className="text-[12px]" />
        <p className="text-[8px] ml-1 font-semibold">{data.data.views}k</p>
      </span>
    </div>
  );
}
