"use client"
import { useRouter } from 'next/navigation';
import { Barlow } from '@/fonts/fonts';

interface PlayAgainProps {
    score: number;
}

export default function PlayAgain({ score }: PlayAgainProps) {
    const router = useRouter();

    const playAgain = () => {
        router.push(`/level-one`);
    }

    return (
        <div className={`${Barlow.className} flex justify-center items-center mt-44 rounded-lg border-2 w-40 border-white self-center justify-self-center tracking-wider text-xl hover:bg-white hover:border-dark text-white hover:text-dark-text button`}>
            <button 
                onClick={playAgain}
                className="text-green-500">
                Play Again
            </button>
        </div>
    );
}
