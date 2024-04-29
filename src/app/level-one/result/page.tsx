"use client";
import { useEffect, useState} from 'react';
import { useSearchParams } from 'next/navigation';

import ScoreBoard from "@/components/ScoreBoard";


export default function Result() {
    const searchParams = useSearchParams();
    const userChoice = searchParams.get('userChoice');

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
                <div>
                    <p>THE HOUSE PICKED: {computerChoice}</p>
                </div>
            </div>
        </div>
    );
}

