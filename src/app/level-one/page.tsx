"use client";
import { Freckle, Barlow } from '@/fonts/fonts'
import { useState, useEffect } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import ScoreBoard from "@/components/ScoreBoard";
import RulesButton from "@/components/RulesButton";
import {useRouter, usePathname} from "next/navigation";



export default function LevelOne() {
    const router = useRouter();
    const [userChoice, setUserChoice] = useState('');
    const [result, setResult] = useState(false);
    const initialScore = typeof window !== 'undefined' ? parseInt(localStorage.getItem('score') ?? '0', 10) : 0;
    const [score, setScore] = useState(initialScore);
    const [computerChoice, setComputerChoice] = useState(''); 
    
    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('score', String(score));
        }
    }, [score]);

    useGSAP(() => {
        let tl = gsap.timeline()
        tl.fromTo('.parent', {scale: 0, opacity: 0}, {
          color: "hsl(230, 89%, 62%)",
          scale: 1,
          y: 20,
          opacity: 1,
          duration: 1,
          ease: "bounce",
          repeat: 1,
        });
    
        // tl.to('.icon', {
        //   motionPath: {
        //     path: "#path",
        //     autoRotate: true,
        //     align: "#path",
        //     alignOrigin: [0.5, 0.5],
        //   },
        //   ease: "none",
        //   duration: 1,
        //   stagger: 0.2,
        //   repeat: -1,
        // });
    
      }, ); 

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
                imageUrl: '/images/icon-scissors.svg'
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
        if (winner === "You Lose!") {
            if (score <= 3 && score >= 0) {
                newScore = 0;
            } else {
                newScore -= 3;
            }
        }
        if (winner === "It's a tie!") {
            newScore += 1;
        }
        setUserChoice(userChoice);
        setComputerChoice(computerChoice);
        setScore(newScore);

        console.log("Level-one :", result);

        router.push(`level-one/result?userChoice=${userChoice}&userClassString=${userClassString}&userImageUrl=${imageUrl}&computerChoice=${computerChoice}&computerClassString=${computerClassString}&computerImageUrl=${computerImageUrl}&winner=${winner}&score=${newScore}&result=true`);
    // Delay of 4 seconds
    };


    return (
        <div className={`${Freckle.className} flex justify-center 
        flex-col parent`}>
           <ScoreBoard userChoice={userChoice} computerChoice={computerChoice} score={score} result={result}/>
           <div className="bg-triangle bg-no-repeat flex flex-col justify-center items-center self-center justify-self-center relative w-[250px] h-[250px] top-36 bg-contain"> 
                <div className="bg-rock-2 hover:bg-rock-1 w-[120px] cursor-pointer h-[120px] icon rounded-full flex items-center justify-center border-[14px]  border-rock-2 shadow-rock absolute top-[-70px] right-[160px]" onClick={() => handleSelection('rock')}>
                    <Image
                        className="p-6 bg-white shadow-insets flex items-center self-center rounded-full object-cover"
                        src="/images/icon-rock.svg"
                        alt="Rock"
                        width={90}
                        height={90}
                        priority
                    />
                </div>
                
                <div className="bg-paper-2 hover:bg-paper-1 w-[120px] cursor-pointer h-[120px] icon rounded-full flex items-center justify-center border-[14px] border-paper-2 shadow-paper absolute top-[-70px] left-[160px]"  onClick={() => handleSelection('paper')}>
                    <Image
                        className="p-6 bg-white rounded-full shadow-insets"
                        src="/images/icon-paper.svg"
                        alt="Paper"
                        width={90}
                        height={90}
                        priority
                    />
                </div>
                
                <div className="bg-scissors-2 hover:bg-scissors-1 w-[120px] cursor-pointer h-[120px]  icon rounded-full flex items-center justify-center border-[14px] border-scissors-2 shadow-scissors absolute top-[100px]" onClick={() => handleSelection('scissors')}>
                    <Image
                        className="p-6 bg-white rounded-full shadow-insets"
                        src="/images/icon-scissors.svg"
                        alt="Scissors"
                        width={90}
                        height={90}
                        priority
                    />
                </div>
            </div>
            <RulesButton/>
        </div>
    )
}
