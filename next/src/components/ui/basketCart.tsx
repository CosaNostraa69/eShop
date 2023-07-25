import Image from "next/image"
import { Button } from "./button"
import { AiOutlineCloseCircle } from "react-icons/ai";
import { AppContext } from "@/components/AppContext";
import { useContext } from "react";


interface Props {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

const  BasketCart: React.FC<Props> = ({name, price, quantity, id}) => {
    const appContext = useContext(AppContext)

    const HandleDeleteCart = ()=>{
        if(appContext){
            appContext.handleDeleteFromCart(id)
        }
    }
    



    return(
        <div className="flex justify-between flex-col px-3">

            <div className="flex justify-between items-center mx-2 border-b border-[#A5DCE3] pb-4 pt-2 ">

                <p className="absolute left left-[2px] text-[14px] cursor-pointer hover:scale-110 duration-100"><AiOutlineCloseCircle onClick={HandleDeleteCart}/></p>
                
                <div className="flex items-center min-w-[45%] max-w-[45%]">
                    <Image src={'/assets/about-us/aboutus-2.webp'} alt="item-pic" width={100} height={100} className="w-[40px] h-[40px] rounded" ></Image>
                    <div className="ml-2 flex-shrink-1">
                        <p className="text-[13px] text-[#444646] font-bold text-overflow-ellipsis overflow-hidden whitespace-nowrap max-w-[80px]">{name}</p>
                        <p className="text-[10px] text-[#7B7E79] max-w-[80px] min-w-[80px]">Delivery 24th July</p>
                    </div>
                </div>

                <div className="flex items-center gap-3 justify-center min-w-[25%] max-w-[25%] text-[#6D706F]">
                    <span className="text-[20px] cursor-pointer hover:scale-110 duration-100">-</span>
                    <p className=" flex justify-center items-center text-[12px] border w-[20px] h-[20px]">{quantity}</p>
                    <span className="text-[20px] cursor-pointer hover:scale-110 duration-100">+</span>
                </div>

                <div className="min-w-[25%] max-w-[25%] flex justify-end">
                    <p className="text-[15px] font-bold text-[#6D706F]">${price}</p>
                </div>
            </div>           

        </div>
    )
}

export default BasketCart