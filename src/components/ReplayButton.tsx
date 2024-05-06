import {useRouter} from "next/navigation";
import { Barlow } from "@/fonts/fonts";
import { FaArrowRotateRight } from 'react-icons/fa6';

interface ReplayButtonProps {
    onClick: () => void;
}
export default function ReplayButton ({onClick}: ReplayButtonProps) {
    const router = useRouter();
    return (
        <div className={`${Barlow.className} flex justify-center items-center rounded-full border-2 justify-self-center tracking-wider text-xl bg-white hover:border-dark p-2 text-dark-text button`}>
        <FaArrowRotateRight size={32} />
    </div>
    )
}
