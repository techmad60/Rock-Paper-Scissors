"use client"
import { useState, useEffect, useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { Barlow, Freckle } from "../fonts/fonts";
import Image from 'next/image';
import Link from 'next/link';
import "./ui/home.css";


export default function Home() {
  const [showOverlay, setShowOverlay] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [showButton, setShowButton] = useState(true);
   const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  
  const container = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(MotionPathPlugin);

  const handleParagraphClick = () => {
    setShowOverlay(false);
    setIsVisible(true);
    setIsButtonClicked(true);
    setShowButton(false);
    setIsAudioPlaying(true);
    console.log('Button Clicked');
    console.log(isButtonClicked)
  };

   const handleButtonClick = () => {
    setIsButtonClicked(true);
    setIsAudioPlaying(false);
   
  };

  useEffect(() => {
    const gameIconsContainer = document.querySelector('.game-icons');

    if (gameIconsContainer) {
      gameIconsContainer.classList.toggle('visible', isVisible); 
    }
    if (!isVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto'; 
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isVisible]);

  useGSAP(() => {
    gsap.to('.button', {
      color: "hsl(230, 89%, 62%)",
      y: 20,
      opacity: 1,
      duration: 1,
      ease: "bounce",
      repeat: -1
    });

    gsap.to('.icon', {
      motionPath: {
        path: "#path",
        autoRotate: true,
        align: "#path",
        alignOrigin: [0.5, 0.5],
      },
      ease: "none",
      duration: 1,
      stagger: 0.2,
      repeat: -1,
    });

  }, [container]); 

  useGSAP(() => {
    let tl = gsap.timeline();
    if (isButtonClicked) {
      tl.fromTo('.title', { opacity: 0, x: 60, scale: 5, }, {
        opacity: 1,
        x: 0,
        stagger: 1,
        scale: 1,
        duration: 1,
        ease: "bounce",
        repeat: -1,
      });
      tl.fromTo('.button-2', {opacity: 0}, {
        color: "hsl(230, 89%, 62%)",
        y: 20,
        opacity: 1,
        duration: 1,
        ease: "bounce",
        repeat: -1
      })
    }
  }, [isButtonClicked]);

 
  return (
    <main className={`${Barlow.className} grid place-content-center place-items-center min-h-screen  items-center justify-center bg-background overflow-x-hidden`} ref={container}>
      {showOverlay && (
        <div className="absolute inset-0 bg-black opacity-50 z-10 flex flex-col justify-center items-center overlay" ></div>
      )}

      <div className="flex flex-col justify-center items-center">
        <div className="relative flex flex-col justify-center items-center" >
          <svg width="250" height="250" xmlns="http://www.w3.org/2000/svg">
            <path id="path" d="M 125,50 
              A 100,100 0 1,1 125,250
              A 100,100 0 1,1 125,50" fill="none" stroke="none" />
          </svg>
          
          <div className="avatar absolute flex flex-col justify-center items-center">
            <Image
                className={`border-4 border-white rounded-full transition-opacity duration-500 ease-in-out mt-12 `}
                src= "/images/clown.png"
                alt="Techmad"
                width={100}
                height={100}
                priority
                />
          </div>
  
          <div className={`game-icons flex absolute transition duration-150 ease-in justify-center items-center top-40 gap-5 opacity-0  ${isVisible ? 'visible' : ''}`}>
            <div className="bg-white w-[55px] h-[55px]  icon rounded-full flex items-center justify-center border-4  border-rock-1">
                <Image
                    className="p-2"
                    src="/images/icon-rock.svg"
                    alt="Rock"
                    width={50}
                    height={50}
                    priority
                />
            </div>
            
            <div className="bg-white w-[55px] h-[55px]  icon rounded-full flex items-center justify-center border-4  border-paper-1">
                <Image
                    className="p-2"
                    src="/images/icon-paper.svg"
                    alt="Paper"
                    width={50}
                    height={50}
                    priority
                />
            </div>
            
            <div className="bg-white w-[55px] h-[55px]  icon rounded-full flex items-center justify-center border-4  border-scissors-1">
                <Image
                    className="p-2"
                    src="/images/icon-scissors.svg"
                    alt="Scissors"
                    width={50}
                    height={50}
                    priority
                />
            </div>
            
            <div className="bg-white w-[55px] h-[55px]  icon rounded-full flex items-center justify-center border-4  border-lizard-1">
                <Image
                    className="p-2"
                    src="/images/icon-lizard.svg"
                    alt="Lizard"
                    width={50}
                    height={50}
                    priority
                />
            </div>

            <div className="bg-white w-[55px] h-[55px]  icon rounded-full flex items-center justify-center border-4  border-spock-1">
              <Image
                  className="p-2"
                  src="/images/icon-spock.svg"
                  alt="Spock"
                  width={50}
                  height={50}
                  priority
              />
            </div>
          </div>
        </div>
        {isButtonClicked && (
          <p className={`${Freckle.className} text-center text-xl game-title flex justify-center items-center space-x-2 mt-12`}>
            <span className='title text-rock-1'>Rock</span>
            <span className='title text-paper-1'>Paper</span>
            <span className='title text-scissors-1'>Scissors</span>
            <span className='title text-lizard-1'>Lizard</span>
            <span className='title text-spock-1'>Spock</span>
          </p>
        )}
        {isButtonClicked && (
          <Link href={"/introduction"} className={`z-30 cursor-pointer button-2 bg-yellow-300 rounded-md m-2 border-2 mt-12 border-white hover:bg-green-500 hover:border-purple-950`} onClick={handleButtonClick}>
          <button className={`${Freckle.className} text-center text-xl  p-1`}>Let&apos;s go</button>
          </Link>
        )}
      </div>

      {showButton && (
        <div className={`z-30 cursor-pointer button bg-yellow-300 rounded-md m-2 border-2 border-white hover:bg-green-500 hover:border-purple-950`} onClick={handleParagraphClick}>
        <button className={`${Freckle.className} text-center text-xl  p-1`}>Click me</button>
        {/* {isAudioPlaying && <audio src="/audio/home.mp3" autoPlay />} */}
        </div>
      )}
      {isAudioPlaying && <audio src="/audio/home.mp3" autoPlay />}
    </main>
  );
}
