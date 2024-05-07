"use client"
import ScoreBoard from "@/components/ScoreBoard";
import { useSearchParams } from 'next/navigation';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
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

    useGSAP(() => {
        let tl = gsap.timeline()
        
        tl.fromTo('.user-text', {x: -40, opacity: 0}, {
            x: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power1.in",
        });
        tl.fromTo('.user-choice', {scale: 3, opacity: 0}, {
            scale: 1,
            opacity: 1,
            duration: 0.95,
            ease: "bounce",
        });
        tl.fromTo('.computer-text', {x: 40, opacity: 0}, {
            x: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power1.in",
        });
        tl.fromTo('.computer-choice', {scale: 3, opacity: 0}, {
            scale: 1,
            opacity: 1,
            duration: 0.95,
            ease: "bounce",
        });
        tl.fromTo('.uppercase', {scale: 3, opacity: 0}, {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: "back.in",

        });
     
      }, ); 

   

    return (
        <div className="bg-background flex flex-col">
            <ScoreBoard userChoice={userChoice} computerChoice={computerChoice} score={score}  result={result}/>
            <div className="flex justify-between items-center text-white mt-16">
                <div className='flex flex-col justify-center items-center gap-8'>
                    <div className={`${userClassString} user-choice`}>
                        <Image
                            className="p-6 bg-white shadow-insets flex items-center self-center rounded-full object-cover"
                            src={imageUrl}
                            alt={userChoice || "Choice"}
                            width={90}
                            height={90}
                            priority
                        />
                    </div>

                    <p className={`${Barlow.className} font-semibold text-xl tracking-wider user-text`}>YOU PICKED</p>
                </div>

                <div className='flex flex-col justify-center items-center text-center gap-8'>
                    <div className={`${computerClassString} computer-choice `}>
                        <Image
                            className="p-6 bg-white shadow-insets flex items-center self-center rounded-full object-cover"
                            src={computerImageUrl}
                            alt={computerChoice || "Choice"}
                            width={90}
                            height={90}
                            priority
                        />
                    </div>
                    <p className={`${Barlow.className} font-semibold text-xl tracking-wider computer-text`}>THE HOUSE PICKED</p>
                </div>

            </div>
            <p className={`${Barlow.className} uppercase text-center mt-12 mb-4 text-[50px] text-white font-bold`}>{winner}</p>
        </div>
    );
}
