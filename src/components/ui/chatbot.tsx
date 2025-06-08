import Image from "next/image"

export default function ChatBot() {
    return (
        <div className="animate-bounce absolute z-1 w-[72px] h-[72px] rounded-full bg-[#DE7C7D] flex justify-center items-center">
            <Image src={"/images/bot.png"} alt="" width={42} height={42}></Image>
            <div className="absolute flex justify-center items-center ml-14 mb-14 border-1 border-[#DE7C7D] bg-white rounded-full w-5 h-5">
                <Image src={"/icons/close.png"} alt="" width={15} height={15}></Image>
            </div>
        </div>
    )
}