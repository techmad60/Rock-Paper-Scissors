"use client"
import { Barlow } from "../fonts/fonts";
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

    useGSAP(() => {
        let tl = gsap.timeline()
        tl.fromTo('.score', { opacity: 0, scale: 3}, {
          scale: 1,
          opacity: 1,
          duration: 1,
          delay: 2.5,
          ease: "bounce",
        });
    
    
      }, ); 
    return (
        <div className=" flex-col border-[3px] border-header-outline rounded-md p-1 score-container flex md:w-1/2 md:self-center">
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
