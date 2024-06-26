"use client"
// import { useRouter } from 'next/navigation';
import { Barlow } from '@/fonts/fonts';
import {  FaArrowRight } from 'react-icons/fa6';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface PlayAgainProps {
    onClick: () => void;
}

export default function PlayAgain({onClick}:PlayAgainProps) {
    useGSAP(() => {
        let tl = gsap.timeline()
        tl.fromTo('.playagain-button', { opacity: 0, x: 100}, {
            x: 0,
            opacity: 1,
            duration: 1,
            delay: 3.8

        });
        tl.fromTo('.replay', { opacity: 0, x: 100}, {
            x: 0,
            opacity: 1,
            duration: 1,

        });
    },)

    return (
        <div className={`${Barlow.className} flex flex-col justify-center items-center tracking-wide`}>
            <div className={`${Barlow.className} flex justify-center items-center  self-center border-4 border-t-rock-1 border-r-paper-1 border-b-spock-1 border-l-scissors-1 rounded-full bg-white justify-self-center tracking-wider text-xl text-dark-text playagain-button p-2 cursor-pointer`}  onClick={onClick}>
                <FaArrowRight size={32}  />
            </div>
            <p className='text-sm text-white replay'>Play again</p>
        </div>
       
    );
}
