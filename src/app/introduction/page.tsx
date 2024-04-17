import Image from 'next/image';
import { Barlow, Freckle } from "../../fonts/fonts";

export default function Page() {
    return (
        <div className='flex justify-center flex-col items-center'>
            <div className="avatar flex flex-col justify-center items-center">
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
            <div>
                <p className = {` text-animation text-center text-white mt-4 p-4 leading-6 text-sm`}>In a world where choices spark, <br/>
                There&apos;s <span className="text-rock-1">Rock </span>
                <span className="text-paper-1">Paper </span> 
                <span className="text-scissors-1">Scissors </span> 
                <span className="text-lizard-1">Lizard </span>and 
                <span className="text-spock-1"> Spock </span>. <br />
                <span className="text-rock-1">Rock </span> crushes 
                <span className="text-scissors-1"> Scissors </span>, its power immense, <br />
                <span className="text-paper-1">Paper </span> covers 
                <span className="text-rock-1"> Rock </span>, a defensive stance. <br />
                <span className="text-scissors-1"> Scissors </span> cuts 
                <span className="text-paper-1"> Paper </span>, with blades so sharp, <br />
                <span className="text-lizard-1">Lizard </span>poisons 
                <span className="text-scissors-1"> Scissors </span>, strikes with a dart. <br /> 
                <span className="text-spock-1">Spock</span> disproves 
                <span className="text-lizard-1"> Lizard </span>, logic his guide, <br />
                But <span className="text-paper-1">Paper</span> defeats him, where truths collide. <br />
                Play with wit in this grand game, <br />
                <span className="text-rock-1">Rock </span> 
                <span className="text-paper-1">Paper </span> 
                <span className="text-scissors-1">Scissors </span>  
                <span className="text-lizard-1"> Lizard </span> 
                <span className="text-spock-1">Spock </span> the aim. <br />
              </p> 
            </div>

            <div>
                <button>Level 1</button>
            </div>
        </div>
    ) 
  }