'use client'
import Image from "next/image";
import Link from "next/link";
import { Belgrano, Montserrat } from "next/font/google";
import { usePathname } from "next/navigation";

const belgrano = Belgrano({
    subsets: ["latin"],
    weight: "400",
})

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: "400",
})


const links = [
    { href: "/", label: "Inicio" },
    { href: "/about", label: "Sobre Nosotros" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contacto" },
];

export default function Header() {
    const pathname = usePathname();
    return (
        <header className={`${belgrano.className} w-full pt-5 uppercase text-[#740938]`}>
            <div className="flex justify-between px-[64px] md:hidden">
                <Image src="/images/logo.png" alt="Logo" width={48} height={48} />
                <Image src="/icons/menu.svg" alt="" width={36} height={36}></Image>
            </div>
            <div className="max-w-6xl mx-auto grid grid-cols-3 grid-cols-[1fr_auto_1fr] items-center px-4">
                <div className="flex gap-6 justify-between items-center">
                    <Link
                        href="#"
                        className={`${montserrat.className} text-sm font-bold text-[22px] text-[#AF1740]`}
                    >
                        <span className="font-extrabold">Daya</span><span className="font-black text-[#740938]">cril</span>
                        <div className="left-0 bottom-0 w-1/2 h-[5px] rounded-full"></div>
                    </Link>
                    {/* {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`text-sm text-[16px] ${pathname === link.href ? "text-[#740938]" : "text-gray-700 hover:text-[#740938]"}`}
                        >
                            {link.label}
                            <div className={`left-0 bottom-0 w-1/2 h-[5.1px] scale-x-0 origin-left transition-transform duration-300 ${pathname === link.href ? "bg-[#740938] scale-x-100" : ""} rounded-full`}></div>
                        </Link>
                    ))} */}
                    <Link href="/" className={`text-sm text-[16px] ${pathname === "/" ? "text-[#740938]" : "text-gray-700 hover:text-[#740938]"}`}>
                        Inicio
                        <div className={`left-0 bottom-0 w-1/2 h-[5.1px] scale-x-0 origin-left transition-transform duration-300 ${pathname === "/" ? "bg-[#740938] scale-x-100" : ""} rounded-full`}></div>
                    </Link>
                    <Link href="/about" className={`text-sm text-[16px] ${pathname === "/about" ? "text-[#740938]" : "text-gray-700 hover:text-[#740938]"}`}>
                        Sobre Nosotros
                        <div className={`left-0 bottom-0 w-1/2 h-[5.1px] scale-x-0 origin-left transition-transform duration-300 ${pathname === "/about" ? "bg-[#740938] scale-x-100" : ""} rounded-full`}></div>
                    </Link>
                </div>
                <div className="flex justify-center px-[64px]">
                    <Image src="/images/logo.png" alt="Logo" width={48} height={48} />
                </div>
                <div className="flex gap-6 justify-between items-center">
                    <Link href="/portfolio" className={`text-sm text-[16px] ${pathname === "/portfolio" ? "text-[#740938]" : "text-gray-700 hover:text-[#740938]"}`}>
                        Portfolio
                        <div className={`left-0 bottom-0 w-1/2 h-[5.1px] scale-x-0 origin-left transition-transform duration-300 ${pathname === "/portfolio" ? "bg-[#740938] scale-x-100" : ""} rounded-full`}></div>
                    </Link>
                    <Link href="/contact" className={`text-sm text-[16px] ${pathname === "/contact" ? "text-[#740938]" : "text-gray-700 hover:text-[#740938]"}`}>
                        Contacto
                        <div className={`left-0 bottom-0 w-1/2 h-[5.1px] scale-x-0 origin-left transition-transform duration-300 ${pathname === "/contact" ? "bg-[#740938] scale-x-100" : ""} rounded-full`}></div>
                    </Link>
                    <div className="flex text-sm text-white w-40 h-10 text-[16px] px-3 py-1 items-center justify-center bg-[#AF1740] rounded-full hover:bg-[#DE7C7D] cursor-pointer transition">
                        Suscríbete
                    </div>
                </div>
            </div>
        </header>
    );
}
