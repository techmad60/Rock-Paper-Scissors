"use client"
import { useRouter } from 'next/navigation';
import { Barlow } from '@/fonts/fonts';
import Link from 'next/link';

interface PlayAgainProps {
    playAgain: () => void;
}


export default function PlayAgain({ playAgain }: PlayAgainProps) {
    // const router = useRouter()
    // const playAgain = () => {
    //     router.back(); 
    // }
 return (
    <div className={`${Barlow.className} flex justify-center items-center mt-44 rounded-lg border-2 w-40 border-white self-center justify-self-center tracking-wider text-xl hover:bg-white hover:border-dark text-white hover:text-dark-text button`}>
       <Link 
            href = {'/level-one'}
            className="text-green-500">
            Play Again
        </Link>
    </div>
 )
}