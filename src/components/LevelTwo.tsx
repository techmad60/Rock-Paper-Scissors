import Link from "next/link"
export default function LevelTwoButton() {

    return (
        <div>
            <Link href={"/level-two"} className='flex justify-center items-center w-fit mx-auto border-4 border-t-rock-1 border-r-paper-1 border-l-scissors-1 border-b-spock-1 rounded-md button mt-12 hover:bg-green-500'>
                <button className={` text-lizard-1 p-2 bg-white m-1 rounded-sm`}>Level two</button>
            </Link>
        </div>
    )
}