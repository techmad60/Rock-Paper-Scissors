
'use client'
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import ScoreBoard from "@/components/ScoreBoard";
import RulesButton from '@/components/RulesButton';
import { Barlow } from '@/fonts/fonts';

const determineWinner = (userChoice: string, computerChoice: string): string => {
    if (userChoice === computerChoice) {
        return 'It\'s a tie!';
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'You win!';
    } else {
        return 'The house wins!';
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

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <ScoreBoard />
            <div className="flex justify-between items-center text-white mt-8">
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
            <p className='text-center mt-16 text-white'>{winner}</p>
            <RulesButton/> 
        </div>
    );
}
