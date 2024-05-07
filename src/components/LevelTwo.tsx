import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Freckle } from '@/fonts/fonts';
import {useRouter, useSearchParams } from "next/navigation";


export default function LevelTwoButton() {
    const search = useSearchParams();
    const router = useRouter();
    const score = parseInt(search.get("score") || "0", 10);
    const currentScore = score;

    console.log(score);
    const handleLevelScore = () => {
        if (currentScore < 6) {
            alert("You need at least 6 points to unlock Level Two! 🙅 ");

        } else {
            // Navigate to Level Two
            router.push('/level-two');
        }
    };


    useGSAP(() => {
        let tl = gsap.timeline()
        tl.fromTo('.leveltwo-btn', { opacity: 0, y: -40}, {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 4,
        });
    })
    return (
        <div>
            <Link href={"/level-two"} className={`${Freckle.className} flex justify-center items-center w-fit mx-auto border-4 border-t-rock-1 border-r-paper-1 border-l-scissors-1 border-b-spock-1 rounded-md button mt-12 leveltwo-btn`}>
                <button className={` text-lizard-1 p-2 bg-white m-1 rounded-sm`} onClick={handleLevelScore}>Level two</button>
            </Link>
        </div>
    )
}