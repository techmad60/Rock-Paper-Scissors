"use client"
import { useRouter } from 'next/navigation';
import { Barlow } from '@/fonts/fonts';





export default function PlayAgain() {
    const router = useRouter()
    const playAgain = () => {
        router.back(); 
    }
 return (
    <div className={`${Barlow.className} flex justify-center items-center mt-44 rounded-lg border-2 w-40 border-white self-center justify-self-center tracking-wider text-xl hover:bg-white hover:border-dark text-white hover:text-dark-text button`}>
       <button 
            onClick = {playAgain}
            className="text-green-500">
            Play Again
        </button>
    </div>
    
    // gsap.registerPlugin(MotionPathPlugin);
    // useGSAP (() => {
    //     let tl = gsap.timeline();
    //     if (!playedOnceRef.current) {
    //         tl.fromTo('.avatar', {y: 20, rotate: 360, scale: 0, opacity: 0}, {
    //             y: 0,
    //             scale: 1,
    //             opacity: 1,
    //             duration: 1,
    //             ease: "bounce.out",
    //         });
    //         tl.fromTo('.level-one', {y: -400,}, {
    //             y: 0,
    //             scale: 1,
    //             rotate: 0,
    //             opacity: 1,
    //             duration: 1,
    //             ease: "bounce",
    //             stagger: 0.5,
    //         });
    //         tl.fromTo('.score-container', {opacity: 0, scale: 3}, {
    //             y: 0,
    //             scale: 1,
    //             opacity: 1,
    //             duration: 1,
    //             ease: "bounce",
    //             stagger: 0.25,
    //         });
    //         tl.fromTo('.word', {opacity: 0, scale: 3, x: 20}, {
    //             y: 0,
    //             x: 0,
    //             scale: 1,
    //             opacity: 1,
    //             duration: 1,
    //             ease: "bounce",
    //             stagger: 0.25,
    //         });
    //         tl.fromTo('.score-bg', {opacity: 0, scale: 3, x: -20}, {
    //             y: 0,
    //             x: 0,
    //             scale: 1,
    //             opacity: 1,
    //             duration: 1,
    //             ease: "bounce",
    //             stagger: 0.25,
    //         });
    //         tl.fromTo('.score-title', {opacity: 0, scale: 3, x: -20}, {
    //             y: 0,
    //             x: 0,
    //             scale: 1,
    //             opacity: 1,
    //             duration: 1,
    //             ease: "bounce",
    //             stagger: 0.25,
    //         });
    //         tl.fromTo('.score', {opacity: 0, scale: 3, x: -20}, {
    //             y: 0,
    //             x: 0,
    //             scale: 1,
    //             opacity: 1,
    //             duration: 1,
    //             ease: "bounce",
    //             stagger: 0.25,
    //         });
    //         tl.fromTo('.bg-triangle', {opacity: 0, scale: 3, x: -20}, {
    //             y: 0,
    //             x: 0,
    //             scale: 1,
    //             opacity: 1,
    //             duration: 1,
    //             ease: "bounce",
    //             stagger: 0.25,
    //         });
    //         tl.fromTo('.icon', {opacity: 0}, {
    //             ease: "bounce",
    //             duration: 1,
    //             opacity: 1,
    //             rotation: 360,
    //             stagger: 0.2,
    //           });
    //         tl.fromTo('.button', {opacity: 0, scale: 2}, {
    //             y: 0,
    //             scale: 1,
    //             opacity: 1,
    //             duration: 1,
    //             ease: "bounce",
    //             stagger: 0.2,
    //         });

    //         playedOnceRef.current = true;
    //     }
        

    // }, [])
    
 )
}