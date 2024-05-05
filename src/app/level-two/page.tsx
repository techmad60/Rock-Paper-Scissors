"use client";
import { Freckle, Barlow } from '@/fonts/fonts'
import { useState, useRef, useEffect } from 'react';
import Image from "next/image";
import ScoreBoard from "@/components/ScoreBoard";
import RulesButton from "@/components/RulesButton";
import {useRouter} from "next/navigation";



export default function LevelTwo() {
    
    const router = useRouter();
    const [userChoice, setUserChoice] = useState('');
    const initialScore = typeof window !== 'undefined' ? parseInt(localStorage.getItem('score') ?? '0', 10) : 0;
    const [score, setScore] = useState(initialScore);
    const [computerChoice, setComputerChoice] = useState(''); 
    
    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('score', String(score));
        }
    }, [score]);

    const determineWinner = (userChoice: string, computerChoice: string): string => {
        if (userChoice === computerChoice) {
            return 'It\'s a tie!';
        } else if (
            (userChoice === 'rock' && (computerChoice === 'scissors' || computerChoice === 'lizard')) ||
            (userChoice === 'paper' && (computerChoice === 'rock' || computerChoice === 'Spock')) ||
            (userChoice === 'scissors' && (computerChoice === 'paper' || computerChoice === 'lizard')) ||
            (userChoice === 'lizard' && (computerChoice === 'paper' || computerChoice === 'Spock')) ||
            (userChoice === 'Spock' && (computerChoice === 'rock' || computerChoice === 'scissors'))
        ) {
            return 'You Win!';
        } else {
            return 'You Lose!';
        }
    };

    const handleSelection = (userChoice: string) => {
        interface Choice {
            classString: string;
            imageUrl: string;
        }
    
        const userChoices: { [key: string]: Choice } = {
            rock: {
                classString: 'bg-rock-2 hover:bg-rock-1',
                imageUrl: '/images/icon-rock.svg'
            },
            paper: {
                classString: 'bg-paper-2 hover:bg-paper-1',
                imageUrl: '/images/icon-paper.svg'
            },
            scissors: {
                classString: 'bg-scissors-2 hover:bg-scissors-1',
                imageUrl: '/images/icon-scissors.svg',
            },
            lizard: {
                classString: 'bg-lizard-2 hover:bg-lizard-1',
                imageUrl: '/images/icon-lizard.svg'
            },
            spock: {
                classString: 'bg-spock-2 hover:bg-spock-1',
                imageUrl: '/images/icon-spock.svg'
            }
        };
    
        const computerChoices: { [key: string]: Choice } = {
            rock: {
                classString: 'bg-rock-2',
                imageUrl: '/images/icon-rock.svg'
            },
            paper: {
                classString: 'bg-paper-2',
                imageUrl: '/images/icon-paper.svg'
            },
            scissors: {
                classString: 'bg-scissors-2',
                imageUrl: '/images/icon-scissors.svg'
            },
            lizard: {
                classString: 'bg-lizard-2',
                imageUrl: '/images/icon-lizard.svg'
            },
            spock: {
                classString: 'bg-spock-2',
                imageUrl: '/images/icon-spock.svg'
            }
        };
    
        const userClassString = userChoices[userChoice].classString + ' w-[120px] cursor-pointer h-[120px] icon rounded-full flex items-center justify-center border-[14px]  border-' + userChoice + '-2 shadow-' + userChoice;
        const imageUrl = userChoices[userChoice].imageUrl;
    
        const computerChoice = Object.keys(computerChoices)[Math.floor(Math.random() * Object.keys(computerChoices).length)];
        const computerClassString = computerChoices[computerChoice].classString + ' w-[120px] h-[120px] icon rounded-full flex items-center justify-center border-[14px]  border-' + computerChoice + '-2 shadow-' + computerChoice;
        const computerImageUrl = computerChoices[computerChoice].imageUrl;

        const winner = determineWinner(userChoice, computerChoice);
        let newScore = score;
        if (winner === "You Win!") {
            newScore += 3;
        }
        if (winner === "You Loose!") {
            if (score <= 3 && score >= 0) {
                newScore = 0;
            } else {
                newScore -= 3;
            }
        } if (winner === "It's a tie!") {
            newScore += 1;
        }
        
    

        setUserChoice(userChoice);
        setComputerChoice(computerChoice);
        setScore(newScore);
        router.push(`level-one/result?userChoice=${userChoice}&userClassString=${userClassString}&userImageUrl=${imageUrl}&computerChoice=${computerChoice}&computerClassString=${computerClassString}&computerImageUrl=${computerImageUrl}&winner=${winner}&score=${newScore}`);
    };

    return (
        <div className={`${Freckle.className} flex justify-center 
        flex-col`}>
           <ScoreBoard userChoice={userChoice} computerChoice={computerChoice} score={score}/>
           <div className="bg-pentagon bg-no-repeat flex flex-col justify-center items-center self-center justify-self-center  relative w-[250px] h-[250px] top-36 bg-contain"> 
                <div className="bg-rock-2 hover:bg-rock-1 w-[120px] cursor-pointer h-[120px] icon rounded-full flex items-center justify-center border-[14px]  border-rock-2 shadow-rock absolute top-[-70px]" onClick={() => handleSelection('rock')}>
                    <Image
                        className="p-6 bg-white shadow-insets flex items-center self-center rounded-full object-cover"
                        src="/images/icon-rock.svg"
                        alt="Rock"
                        width={90}
                        height={90}
                        priority
                    />
                </div>
                
                <div className="bg-paper-2 hover:bg-paper-1 w-[120px] cursor-pointer h-[120px] icon rounded-full flex items-center justify-center border-[14px] border-paper-2 shadow-paper absolute top-[10px] right-[180px]"  onClick={() => handleSelection('paper')}>
                    <Image
                        className="p-6 bg-white rounded-full shadow-insets"
                        src="/images/icon-paper.svg"
                        alt="Paper"
                        width={90}
                        height={90}
                        priority
                    />
                </div>
                
                <div className="bg-scissors-2 hover:bg-scissors-1 w-[120px] cursor-pointer h-[120px]  icon rounded-full flex items-center justify-center border-[14px] border-scissors-2 shadow-scissors absolute top-[10px] left-[180px]" onClick={() => handleSelection('scissors')}>
                    <Image
                        className="p-6 bg-white rounded-full shadow-insets"
                        src="/images/icon-scissors.svg"
                        alt="Scissors"
                        width={90}
                        height={90}
                        priority
                    />
                </div>

                <div className="bg-lizard-2 hover:bg-lizard-1 w-[120px] cursor-pointer h-[120px]  icon rounded-full flex items-center justify-center border-[14px] border-lizard-2 shadow-lizard absolute top-[140px] right-[140px]" onClick={() => handleSelection('lizard')}>
                    <Image
                        className="p-6 bg-white rounded-full shadow-insets"
                        src="/images/icon-lizard.svg"
                        alt="Scissors"
                        width={90}
                        height={90}
                        priority
                    />
                </div>
                <div className="bg-spock-2 hover:bg-spock-1 w-[120px] cursor-pointer h-[120px]  icon rounded-full flex items-center justify-center border-[14px] border-spock-2 shadow-spock absolute top-[140px] left-[140px]" onClick={() => handleSelection('spock')}>
                    <Image
                        className="p-6 bg-white rounded-full shadow-insets"
                        src="/images/icon-spock.svg"
                        alt="Scissors"
                        width={90}
                        height={90}
                        priority
                    />
                </div> 
            </div>
            <RulesButton/>
        </div>
)}
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import { MotionPathPlugin } from "gsap/MotionPathPlugin";