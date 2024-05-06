"use client"
import { Barlow } from "../fonts/fonts";
import {useSearchParams} from "next/navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useState, useEffect } from "react";

interface ScoreBoardProps {
    userChoice: string;
    computerChoice: string;
    score: number;
    result: boolean;
}

const ScoreBoard: React.FC<ScoreBoardProps> = ({ userChoice, computerChoice, score, result}) => {

    const [updatedScore, setUpdatedScore] = useState(score);
    console.log ("Scoreboard :", result)
    useEffect(() => {
        if (!result) {
            // Delay the score update by 4 seconds
            const timer = setTimeout(() => {
                setUpdatedScore(score);
            }, 4000);
            return () => clearTimeout(timer);
        } else {
            // Delay the score update by 1 second if it's on the result page
            const timer = setTimeout(() => {
                setUpdatedScore(score);
            }, 9000);
            return () => clearTimeout(timer);
        }

    }, [score, result]);
    useGSAP(() => {
        let tl = gsap.timeline()
        tl.fromTo('.score', { opacity: 0, scale: 3}, {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "bounce",
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
    return (
        <div className="flex flex-col border-[3px] border-header-outline rounded-md p-1 score-container">
            <div className={` ${Barlow.className} flex justify-between items-center  m-1`}>
                <div className={` ${Barlow.className} text-white font-semibold text-xl leading-4 pl-4`}> 
                    <p className="word">ROCK</p>
                    <p className="word">PAPER</p>
                    <p className="word">SCISSORS</p>
                    <p className="word">LIZARD</p>
                    <p className="word">SPOCK</p>
                </div>
                <div className=" text-gray-700 bg-white flex flex-col justify-center items-center border  rounded-sm w-[63px] h-[63px] score-bg">
                    <p className="text-xs text-score-text tracking-wider font-semibold score-title">SCORE</p>
                    <p className="text-4xl font-bold text-dark-text score" id="score">{updatedScore}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ScoreBoard;
