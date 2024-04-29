import { Barlow } from "@/fonts/fonts";
import Link from "next/link";
export default function RulesButton() {
    return (
        <div className={`${Barlow.className} flex justify-center items-center mt-44 rounded-lg border-2 w-40 border-white self-center justify-self-center tracking-wider text-xl hover:bg-white hover:border-dark text-white hover:text-dark-text button`}>
            <Link href ={"/rules"} className="p-2"> RULES </Link>
        </div>
    )
}