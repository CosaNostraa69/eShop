import { Button } from "@/components/ui/button";
import { GiConfirmed } from "react-icons/gi";

export default function confirmation() {
  return (
    <div className="w-full h-screen pt-[7%] flex justify-center text-center ">
      <div className="w-[500px] h-[300px] shadow-2xl rounded flex flex-col bg-[#E7EEE7] justify-center items-center ">
        <GiConfirmed className="text-[60px] text-[#6BC86B] mb-2" />
        <h1 className="text-2xl font-bold mb-4 ">Success!</h1>
        <p className="text-sm mb-4">
          A confimation has been sent to your mail. <br /> Thank you for your
          trust!
        </p>
        <Button>Home</Button>
      </div>
    </div>
  );
}
