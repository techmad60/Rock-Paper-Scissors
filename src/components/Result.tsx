
'use client'
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import ScoreBoard from "@/components/ScoreBoard";

export default function Result() {
    const searchParams = useSearchParams();
    const userChoice = searchParams.get('userChoice');
    const userClassString = searchParams.get('userClassString') || '';
    const imageUrl = searchParams.get('userImageUrl') || '';

    const generateComputerChoice = () => {
        const choices = ['rock', 'paper', 'scissors'];
        return choices[Math.floor(Math.random() * choices.length)];
    };

    const computerChoice = generateComputerChoice();
     let computerClassString = '';
     let computerImageUrl = '';
     switch (computerChoice) {
        case 'rock':
            computerClassString = 'bg-rock-2 w-[120px] h-[120px] icon rounded-full flex items-center justify-center border-[14px]  border-rock-2 shadow-rock';
            computerImageUrl = '/images/icon-rock.svg';
            break;
        case 'paper':
            computerClassString = 'bg-paper-2 w-[120px] h-[120px] icon rounded-full flex items-center justify-center border-[14px] border-paper-2 shadow-paper';
            computerImageUrl = '/images/icon-paper.svg';
            break;
        case 'scissors':
            computerClassString = 'bg-scissors-2 w-[120px] h-[120px]  icon rounded-full flex items-center justify-center border-[14px] border-scissors-2 shadow-scissors';
            computerImageUrl = '/images/icon-scissors.svg';
            break;
        default:
            break;
    }

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <ScoreBoard />
            <div className="flex justify-between items-center text-white">
                <div className='flex flex-col '> 
                    <div>
                        {/* <p className='text-center'>YOU PICKED: {userChoice}</p> */}
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
                    </div>
                </div>
               
               <div className='flex flex-col'>
                    <div>
                        {/* <p className='text-center'>THE HOUSE PICKED: {computerChoice}</p> */}
                    </div>
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
               </div>   
            </div>
        </div>
    );
}
