// components/Result.tsx
'use client'
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import ScoreBoard from "@/components/ScoreBoard";

export default function Result() {
    const searchParams = useSearchParams();
    const userChoice = searchParams.get('userChoice');
    const userClassString = searchParams.get('userClassString') || '';
    const imageUrl = searchParams.get('imageUrl') || '';

    const generateComputerChoice = () => {
        const choices = ['rock', 'paper', 'scissors'];
        return choices[Math.floor(Math.random() * choices.length)];
    };

    const computerChoice = generateComputerChoice();

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <ScoreBoard />
            <div className="flex justify-between items-center text-white">
                <div>
                    <p>YOU PICKED: {userChoice}</p>
                </div>
                <div className={userClassString}>
                    <Image
                        className="p-6 bg-white shadow-insets flex items-center self-center rounded-full object-cover"
                        src={imageUrl}
                        alt={userChoice || "Choice"}
                        width={90}
                        height={90}
                        priority
                    />
                    <p>{userChoice}</p>
                </div>
                <div>
                    <p>THE HOUSE PICKED: {computerChoice}</p>
                </div>
            </div>
        </div>
    );
}
