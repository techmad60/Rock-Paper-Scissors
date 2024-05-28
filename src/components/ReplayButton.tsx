// import {useRouter} from "next/navigation";
import { Barlow } from "@/fonts/fonts";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FaArrowRotateLeft } from 'react-icons/fa6';

interface ReplayButtonProps {
    onClick: () => void;
}
export default function ReplayButton ({onClick}: ReplayButtonProps) {
    useGSAP(() => {
        let tl = gsap.timeline()
        tl.fromTo('.replay-button', { opacity: 0, x: -100}, {
            x: 0,
            opacity: 1,
            duration: 1,
            delay: 3.8
        });
        tl.fromTo('.restart', { opacity: 0, x: -100}, {
            x: 0,
            opacity: 1,
            duration: 1,
            delay: 3.8
        });
    },)

    return (
        <div className={`${Barlow.className} flex flex-col justify-center items-center `}>
            <div className={`${Barlow.className} flex justify-center items-center rounded-full border-4 border-t-rock-1 border-r-paper-1 border-b-spock-1 border-l-scissors-1 text-dark-text justify-self-center tracking-wider text-xl bg-white hover:border-dark p-2 replay-button cursor-pointer`}  onClick={onClick}>
                <FaArrowRotateLeft size={32} />
            </div>
            <p className="text-sm text-white tracking-wide restart">Restart</p>
        </div>
       
    )
}
