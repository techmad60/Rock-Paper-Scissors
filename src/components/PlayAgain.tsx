"use client"
import { useRouter } from 'next/navigation';
import { Barlow } from '@/fonts/fonts';

export default function PlayAgain() {
    const router = useRouter()
    const playAgain = () => {
        router.back(); // Navigate back to the previous page
    }
 return (
    <div className={`${Barlow.className} flex justify-center items-center mt-44 rounded-lg border-2 w-40 border-white self-center justify-self-center tracking-wider text-xl hover:bg-white hover:border-dark text-white hover:text-dark-text button`}>
       <button
            onClick={playAgain}
            className="">
            Play Again
        </button>
    </div>
 )
}