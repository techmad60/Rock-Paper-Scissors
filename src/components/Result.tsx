"use client"
import React, { useState, useEffect } from 'react';
import ScoreBoard from "@/components/ScoreBoard";
import RulesButton from '@/components/RulesButton';
import PlayAgain from './PlayAgain';
import { useSearchParams } from 'next/navigation';
import { Barlow } from '@/fonts/fonts';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const determineWinner = (userChoice: string, computerChoice: string): string => {
    if (userChoice === computerChoice) {
        return 'It\'s a tie!';
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'You Win!';
    } else {
        return 'You Loose!';
    }
};

const updateScore = (result: string, currentScore: number): number => {
    if (result === 'You win!') {
        return currentScore + 3;
    } else if (result === 'You Loose!') {
        return currentScore - 1;
    } else {
        return currentScore + 1;
    }
};

export default function Result() {
    const searchParams = useSearchParams();
    const userChoice = searchParams.get('userChoice') || '';
    const userClassString = searchParams.get('userClassString') || '';
    const imageUrl = searchParams.get('userImageUrl') || '';
    const computerChoice = searchParams.get('computerChoice') || '';
    const computerClassString = searchParams.get('computerClassString') || '';
    const computerImageUrl = searchParams.get('computerImageUrl') || '';
    const winner = determineWinner(userChoice, computerChoice);
    const router = useRouter();

    const [score, setScore] = useState(0);

    useEffect(() => {
        // Update score when component mounts
        setScore(prevScore => updateScore(winner, prevScore));
    }, [winner]);

    const playAgain = () => {
        // Reset animation state and navigate back to level-one route
        router.push('/level-one');
    };

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <ScoreBoard score={score} />
            <div className="flex justify-between items-center text-white mt-16">
                <div className='flex flex-col justify-center items-center gap-8'>
                    <div className={userClassString}>
                        <Image
                            className="p-6 bg-white shadow-insets flex items-center self-center rounded-full object-cover"
                            src={imageUrl}
                            alt={userChoice || "Choice"}
                            width={90}
                            height={90}
                            priority
                        />
                    </div>

                    <p className={`${Barlow.className} font-semibold text-xl tracking-wider`}>YOU PICKED</p>
                </div>

                <div className='flex flex-col justify-center items-center text-center gap-8'>
                    <div className={computerClassString}>
                        <Image
                            className="p-6 bg-white shadow-insets flex items-center self-center rounded-full object-cover"
                            src={computerImageUrl}
                            alt={computerChoice || "Choice"}
                            width={90}
                            height={90}
                            priority
                        />
                    </div>
                    <p className={`${Barlow.className} font-semibold text-xl tracking-wider`}>THE HOUSE PICKED</p>
                </div>

            </div>
            <p className={`${Barlow.className} uppercase text-center mt-16 text-white text-[60px] font-bold`}>{winner}</p>
            <PlayAgain playAgain={playAgain}/>
            <RulesButton />
        </div>
    );
}
