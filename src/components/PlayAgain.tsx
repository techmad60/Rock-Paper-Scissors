"use client"
// import { useRouter } from 'next/navigation';
import { Barlow } from '@/fonts/fonts';
import {  FaArrowLeft } from 'react-icons/fa6';

interface PlayAgainProps {
    onClick: () => void;
}

export default function PlayAgain({onClick}:PlayAgainProps) {
  

    return (
        <div className={`${Barlow.className} flex justify-center items-center  self-center border-2 rounded-full bg-white justify-self-center tracking-wider text-xl text-dark-text button p-2`}  onClick={onClick}>
            <FaArrowLeft size={32}  />
        </div>
    );
}
