import Image from "next/image"
import { Bebas_Neue, Poppins } from "next/font/google"
import Carrousel from "daya/components/ui/carrousel"
import ChatBot from "daya/components/ui/chatbot"

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
})

export default function Home() {
  return (
    <div className="w-full pt-5">
      <div className="w-full grid grid-cols-2 ps-[74px]">
        <div className="">
          <h1 className={`${bebasNeue.className} text-nowrap text-8xl text-[#2E2E2E]`}>Diseños en<br></br><span className="text-[#AF1740]">Corte Láser</span><br></br>que Dejan Huella</h1>
          <p className={`${poppins.className} text-[20px] text-[#2E2E2E] opacity-50`}>Personalizamos tus ideas en madera, acrílico y más<br></br>para cada ocasión especial. Regalos únicos, eventos memorables y decoración a tu estilo.</p>
        </div>
        <div className="flex flex-col justify-end items-center">
          <Carrousel></Carrousel>
          <div className="flex gap-10 absolute translate-y-1/2 translate-x-1/12">
            <div className={`${poppins.className} flex cursor-pointer rounded-xl bg-white shadow w-36 items-center justify-center`}>
              <Image className="py-3 pe-2" src={"/icons/facebook.png"} alt="" width={32} height={32}></Image>
              <span className="text-[18px] text-[#2E2E2E] font-bold">Dayacril</span>
            </div>
            <div className={`${poppins.className} flex cursor-pointer rounded-xl bg-white shadow w-46 items-center justify-center`}>
              <Image className="py-3 pe-2" src={"/icons/whatsapp.png"} alt="" width={32} height={32}></Image>
              <span className="text-[18px] text-[#2E2E2E] font-bold">999 999 999</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-4 mt-10 bg-[#AF1740]"></div>
      <div className="flex justify-center mt-5">
        <Image src={"/images/brand.png"} alt="" width={1100} height={48}></Image>
      </div>
      <div className="fixed top-145 right-10 left-0 flex justify-end">
        <ChatBot></ChatBot>
      </div>
    </div>
  );
}
