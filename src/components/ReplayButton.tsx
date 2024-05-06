// import {useRouter} from "next/navigation";
import { Barlow } from "@/fonts/fonts";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FaArrowRotateRight } from 'react-icons/fa6';

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
            delay: 3.5

        });
    },)
    // const router = useRouter();
    return (
        <div className={`${Barlow.className} flex justify-center items-center rounded-full border-2 justify-self-center tracking-wider text-xl bg-white hover:border-dark p-2 text-dark-text replay-button`}>
        <FaArrowRotateRight size={32} />
    </div>
    )
}
