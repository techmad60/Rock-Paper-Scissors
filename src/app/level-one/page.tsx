"use client";
import { Freckle, Barlow } from "../../fonts/fonts";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import ScoreBoard from "@/components/ScoreBoard";
import RulesButton from "@/components/RulesButton";
import {useState, useEffect} from "react";
import {useRouter} from "next/navigation";
import { useSearchParams } from 'next/navigation';

export default function LevelOne() {
    const router = useRouter();

    const handleSelection = (choice: string) => {
        router.push(`level-one/result?userChoice=${choice}`);
      };

    gsap.registerPlugin(MotionPathPlugin);
    let tl = gsap.timeline();
    useGSAP (() => {
        tl.fromTo('.avatar', {y: 20, rotate: 360, scale: 0, opacity: 0}, {
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "bounce.out",
        });
        tl.fromTo('.level-one', {y: -400,}, {
            y: 0,
            scale: 1,
            rotate: 0,
            opacity: 1,
            duration: 1,
            ease: "bounce",
            stagger: 0.5,
        });
        tl.fromTo('.score-container', {opacity: 0, scale: 3}, {
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "bounce",
            stagger: 0.25,
        });
        tl.fromTo('.word', {opacity: 0, scale: 3, x: 20}, {
            y: 0,
            x: 0,
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "bounce",
            stagger: 0.25,
        });
        tl.fromTo('.score-bg', {opacity: 0, scale: 3, x: -20}, {
            y: 0,
            x: 0,
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "bounce",
            stagger: 0.25,
        });
        tl.fromTo('.score-title', {opacity: 0, scale: 3, x: -20}, {
            y: 0,
            x: 0,
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "bounce",
            stagger: 0.25,
        });
        tl.fromTo('.score', {opacity: 0, scale: 3, x: -20}, {
            y: 0,
            x: 0,
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "bounce",
            stagger: 0.25,
        });
        tl.fromTo('.bg-triangle', {opacity: 0, scale: 3, x: -20}, {
            y: 0,
            x: 0,
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "bounce",
            stagger: 0.25,
        });
        tl.fromTo('.icon', {opacity: 0}, {
            ease: "bounce",
            duration: 1,
            opacity: 1,
            rotation: 360,
            stagger: 0.2,
          });
        tl.fromTo('.button', {opacity: 0, scale: 2}, {
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "bounce",
            stagger: 0.2,
        });

    })
    

    return (
        <div className={`${Freckle.className} flex justify-center 
        flex-col`}>
           <div className="avatar flex flex-col justify-center items-center z-30">
                <Image
                    className={`border-4 border-white rounded-full `}
                    src= "/images/clown.png"
                    alt="Techmad"
                    width={50}
                    height={50}
                    priority
                    />
            </div>
            <p className={`${Freckle.className} text-center level-one text-white mb-3`}>  Level 1 
            </p>
           
           <ScoreBoard />
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
                
                <div className="bg-paper-2 hover:bg-paper-1 w-[120px] cursor-pointer h-[120px] icon rounded-full flex items-center justify-center border-[14px] border-paper-2 shadow-paper absolute top-[-70px] left-[160px]" onClick={() => handleSelection('paper')}>
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