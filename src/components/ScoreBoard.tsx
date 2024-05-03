"use client"
import { Barlow } from "../fonts/fonts";

interface ScoreBoardProps {
    userChoice: string;
    computerChoice: string;
    score: number;
 
}

const ScoreBoard: React.FC<ScoreBoardProps> = ({ userChoice, computerChoice, score }) => {
    return (
        <div className="flex flex-col border-[3px] border-header-outline rounded-md p-1 score-container">
            <div className={` ${Barlow.className} flex justify-between items-center  m-1`}>
                <div className={` ${Barlow.className} text-white font-semibold text-xl leading-4 pl-4`}> 
                    <p className="word">ROCK</p>
                    <p className="word">PAPER</p>
                    <p className="word">SCISSORS</p>
                </div>

                {/* <div>
                    <p>User choice: {userChoice}</p>
                    <p>Computer choice: {computerChoice}</p>
                    
                </div> */}

                <div className=" text-gray-700 bg-white flex flex-col justify-center items-center border  rounded-sm w-[63px] h-[63px] score-bg">
                    <p className="text-xs text-score-text tracking-wider font-semibold score-title"></p>
                    <p className="text-4xl font-bold text-dark-text score" id="score">{score}</p>
                </div>
            </div>
        </div>
    );
};

export default ScoreBoard;
