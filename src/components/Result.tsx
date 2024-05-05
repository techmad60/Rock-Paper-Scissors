"use client"
import ScoreBoard from "@/components/ScoreBoard";
import ReplayButton from '@/components/ReplayButton';
import RulesButton from '@/components/RulesButton';
import PlayAgain from './PlayAgain';
import { useState } from "react";
import { useSearchParams } from 'next/navigation';
import { Barlow } from '@/fonts/fonts';
import Image from 'next/image';
import Link from "next/link";


export default function Result() {
    const searchParams = useSearchParams();
    const userChoice = searchParams.get('userChoice') || '';
    const userClassString = searchParams.get('userClassString') || '';
    const imageUrl = searchParams.get('userImageUrl') || '';
    const computerChoice = searchParams.get('computerChoice') || '';
    const computerClassString = searchParams.get('computerClassString') || '';
    const computerImageUrl = searchParams.get('computerImageUrl') || '';
    const winner = searchParams.get('winner') || '';
    const resultParam = searchParams.get('result');
    const result = resultParam !== null && resultParam !== 'false';
    const score = parseInt(searchParams.get("score") || "0", 10);
    console.log("Result-page :", result);
   

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <ScoreBoard userChoice={userChoice} computerChoice={computerChoice} score={score}  result/>
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
            {/* <PlayAgain /> */}
            {/* <ReplayButton /> */}
            <Link href={"/level-two"} className='flex justify-center items-center w-fit mx-auto border-4 border-t-rock-1 border-r-paper-1 border-l-scissors-1 border-b-spock-1 rounded-md button mt-4 hover:bg-green-500'>
                <button className={` text-lizard-1 p-2 bg-white m-1 rounded-sm`}>Level two</button>
            </Link>
        </div>
    );
}
