"use client"
import Image from 'next/image';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Freckle, Barlow } from "../../fonts/fonts";
import Link from 'next/link';

export default function Page() {

    let tl = gsap.timeline();
    useGSAP (() => {
        tl.fromTo('.avatar', {y: 20, rotate: 360, scale: 0, opacity: 0}, {
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "bounce.out",
        });
        tl.fromTo('.title', {y: -400,}, {
            y: 0,
            scale: 1,
            rotate: 0,
            opacity: 1,
            duration: 1,
            ease: "bounce",
            stagger: 0.5,
        });
        tl.fromTo('.word', {opacity: 0, scale: 3}, {
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "bounce",
            stagger: 0.25,
        });
        tl.fromTo('.button', {opacity: 0, scale: 2}, {
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "bounce",
            stagger: 0.2,
        });
        tl.fromTo('.avatar', {y: 0}, {
            y: 10,
            scale: 1,
            opacity: 1,
            duration: 0.5,
            yoyo: true,
            repeat: -1
        });
        tl.fromTo('.button', {opacity: 0, scale: 1.5}, {
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "bounce",
            stagger: 0.2,
            repeat: -1,
        });

    })
    return (
        <div className='flex justify-center flex-col items-center' >
            <div className="avatar flex flex-col justify-center items-center z-30">
                <Image
                    className={`border-4 border-white rounded-full `}
                    src= "/images/clown.png"
                    alt="Techmad"
                    width={100}
                    height={100}
                    priority
                    />
            </div>

            <h1 className={`${Freckle.className} text-center text-xl game-title flex justify-center items-center space-x-2 mt-4`}>
                <span className='title text-rock-1'>Rock</span>
                <span className='title text-paper-1'>Paper</span>
                <span className='title text-scissors-1'>Scissors</span>
                <span className='title text-lizard-1'>Lizard</span>
                <span className='title text-spock-1'>Spock</span>
            </h1>
            <div className={`${Barlow.className}`}>
                <p className = {` text-animation text-center text-white mt-4 p-4 leading-6 text-[15px]`}> <span className='word'>In</span> <span className='word'>a</span> <span className='word'>world</span> <span className='word'>where</span> <span className='word'>choices</span> <span className='word'>spark,</span><br/>
                <span className='word'>There&apos;s</span> <span className="word text-rock-1">Rock,</span>
                <span className="word text-paper-1"> Paper,</span> 
                <span className="word text-scissors-1"> Scissors,</span>
                <span className="word text-lizard-1"> Lizard,</span> <span className='word'>and</span>  
                <span className="word text-spock-1"> Spock. </span> <br />
                <span className="word text-rock-1">Rock </span> <span className='word'>crushes</span> 
                <span className="word text-scissors-1"> Scissors, </span> <span className='word'>its</span> <span className='word'>power</span> <span className='word'>immense,</span> <br />
                <span className="word text-paper-1">Paper </span> <span className='word'>covers</span>  
                <span className="word text-rock-1"> Rock, </span> <span className='word'>a</span> <span className='word'>defensive</span> <span className='word'>stance.</span><br />
                <span className="word text-scissors-1"> Scissors </span> <span className='word'>cuts</span>
                <span className="word text-paper-1"> Paper, </span> <span className='word'>with</span> <span className='word'>blades</span> <span className='word'>so</span> <span className='word'>sharp,</span><br />
                <span className="word text-lizard-1">Lizard </span> <span className='word'>poisons</span> 
                <span className="word text-scissors-1"> Scissors, </span> <span className='word'>strikes</span> <span className='word'>with</span> <span className='word'>a</span> <span className='word'>dart.</span><br /> 
                <span className="word text-spock-1">Spock</span> <span className='word'>disproves</span> 
                <span className="word text-lizard-1"> Lizard,</span> <span className='word'>logic</span> <span className='word'>his</span> <span className='word'>guide,</span><br />
                <span className='word'>But</span> <span className="word text-paper-1">Paper</span> <span className='word'>defeats</span> <span className='word'>him,</span > <span className='word'>where</span> <span className='word'>truths</span> <span className='word'>collide.</span><br />
                <span className='word'>Play</span> <span className='word'>with</span> <span className='word'>wit</span> <span className='word'>in</span> <span className='word'>this</span> <span className='word'>grand</span> <span className='word'>game,</span><br />
                <span className="word text-rock-1">Rock, </span>
                <span className="word text-paper-1">Paper, </span> 
                <span className="word text-scissors-1">Scissors, </span>  
                <span className="word text-lizard-1">Lizard, </span> 
                <span className="word text-spock-1">Spock ,</span> <span className='word'>the</span> <span className='word'>aim.</span><br />
              </p> 
            </div>

            <Link href={"/level-one"} className=' border-4 border-t-rock-1 border-r-paper-1 border-l-scissors-1 border-b-spock-1 rounded-md button mt-4 hover:bg-green'>
                <button className={`${Freckle.className} text-lizard-1 p-2 bg-white m-1 rounded-sm`}>Level one</button>
            </Link>
        </div>
    ) 
  }