'use client'
import { useEffect, useState } from "react"
import Image from "next/image"

export default function Carrousel() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [isVisible, setIsVisible] = useState(true)

    const slides = [
        { "id": 1, "image": "/images/hero-main-1.png" },
        { "id": 2, "image": "/images/hero-main-2.png" }
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setIsVisible(false)
            setTimeout(() => {
                setCurrentSlide((prev) => (prev + 1) % slides.length)
                setIsVisible(true)
            }, 500)
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <Image className={`transition-opacity duration-800 ${isVisible ? "opacity-100" : "opacity-0"}`} src={`${slides[currentSlide].image}`} alt="" width={612} height={558}></Image>
        </>
    )
}