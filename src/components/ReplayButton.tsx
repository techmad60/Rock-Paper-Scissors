import {useRouter} from "next/navigation";
import { Barlow } from "@/fonts/fonts";

export default function ReplayButton () {
    const router = useRouter();

    const handleReplay = () => {
        localStorage.setItem('score', '0');
        router.refresh();
        router.push('/level-one'); // Reload the page to reset the score
    };
    return (
        <div className={`${Barlow.className} flex justify-center items-center mt-44 rounded-lg border-2 w-40 border-white self-center justify-self-center tracking-wider text-xl hover:bg-white hover:border-dark text-white hover:text-dark-text button`}>
        <button 
           onClick={handleReplay}
            className="text-green-500">
            Replay
        </button>
    </div>
    )
}