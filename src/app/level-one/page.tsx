"use client"
import { Freckle, Barlow } from "../../fonts/fonts";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {useState, useEffect} from "react";

export default function LevelOne() {
    const [isAudioPlaying, setIsAudioPlaying] = useState(false);

    useEffect(() => {
        setIsAudioPlaying(true);
    }, []);

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
        // tl.fromTo('.button', {opacity: 0, scale: 2}, {
        //     y: 0,
        //     scale: 1,
        //     opacity: 1,
        //     duration: 1,
        //     ease: "bounce",
        //     stagger: 0.2,
        // });
        // tl.fromTo('.avatar', {y: 0}, {
        //     y: 10,
        //     scale: 1,
        //     opacity: 1,
        //     duration: 0.5,
        //     yoyo: true,
        //     repeat: -1
        // });
        // tl.fromTo('.button', {opacity: 0, scale: 1.5}, {
        //     y: 0,
        //     scale: 1,
        //     opacity: 1,
        //     duration: 1,
        //     ease: "bounce",
        //     stagger: 0.2,
        //     repeat: -1,
        // });

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
            <p className={`${Freckle.className} text-center level-one text-white mb-4`}>  Level 1 
            </p>
            <div className="flex flex-col border-[3px] border-header-outline rounded-md p-1 score-container">
                <div className={` ${Barlow.className} flex justify-between items-center  m-1`}>
                    <div className={` ${Barlow.className} text-white font-semibold text-xl leading-4 pl-4`}> 
                        <p className="word">ROCK</p>
                        <p className="word">PAPER</p>
                        <p className="word">SCISSORS</p>
                    </div>

                    <div className=" text-gray-700 bg-white flex flex-col justify-center items-center border  rounded-sm w-[63px] h-[63px] score-bg">
                        <p className="text-xs text-score-text tracking-wider font-semibold score-title">SCORE</p>
                        <p className="text-4xl font-bold text-dark-text score" >12</p>
                    </div>
                </div>
            </div>

         <div className="bg-triangle bg-no-repeat flex flex-col justify-center items-center self-center justify-self-center relative w-[250px] h-[250px] top-36 bg-contain"> 
            <div className="bg-rock-2 w-[120px] h-[120px] icon rounded-full flex items-center justify-center border-[14px]  border-rock-2 shadow-rock absolute top-[-70px] right-[160px]">
                    <Image
                        className="p-6 bg-white shadow-insets flex items-center self-center rounded-full object-cover"
                        src="/images/icon-rock.svg"
                        alt="Rock"
                        width={90}
                        height={90}
                        priority
                    />
                </div>
                
                <div className="bg-paper-1 w-[120px] h-[120px] icon rounded-full flex items-center justify-center border-[14px] border-paper-2 shadow-paper absolute top-[-70px] left-[160px]">
                    <Image
                        className="p-6 bg-white rounded-full shadow-insets"
                        src="/images/icon-paper.svg"
                        alt="Paper"
                        width={90}
                        height={90}
                        priority
                    />
                </div>
                
                <div className="bg-scissors-2 w-[120px] h-[120px]  icon rounded-full flex items-center justify-center border-[14px] border-scissors-2 shadow-scissors absolute 
                top-[100px]">
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
            <div className={`${Barlow.className} flex justify-center items-center mt-48 rounded-lg border-2 w-40 border-white self-center justify-self-center tracking-wider text-xl`}>
                <button className="text-white p-2">RULES</button>
            </div>
            {isAudioPlaying && <audio src="/audio/main.mp3" autoPlay />}
        </div>
    ) 
  }