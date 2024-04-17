import Image from 'next/image';

export default function Page() {
    return (
        <div className='flex justify-center flex-col items-center'>
            <div className='flex gap-4'> 
               <div className="bg-white w-[55px] h-[55px]  icon rounded-full flex items-center justify-center border-4 border-rock-1">
                    <Image
                        className="p-2"
                        src="/images/icon-rock.svg"
                        alt="Rock"
                        width={50}
                        height={50}
                        priority
                    />
                </div>
                
                <div className="bg-white w-[55px] h-[55px]  icon rounded-full flex items-center justify-center border-4 border-paper-1">
                    <Image
                        className="p-2"
                        src="/images/icon-paper.svg"
                        alt="Paper"
                        width={50}
                        height={50}
                        priority
                    />
                </div>
                
                <div className="bg-white w-[55px] h-[55px]  icon rounded-full flex items-center justify-center border-4 border-scissors-1">
                    <Image
                        className="p-2"
                        src="/images/icon-scissors.svg"
                        alt="Scissors"
                        width={50}
                        height={50}
                        priority
                    />
                </div>
                
                <div className="bg-white w-[55px] h-[55px]  icon rounded-full flex items-center justify-center border-4 border-lizard-1">
                    <Image
                        className="p-2"
                        src="/images/icon-lizard.svg"
                        alt="Lizard"
                        width={50}
                        height={50}
                        priority
                    />
                </div>

                <div className="bg-white w-[55px] h-[55px]  icon rounded-full flex items-center justify-center border-4 border-spock-1">
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
            <div>
                <p className = {` text-animation text-center text-white mt-4 p-4 leading-7`}>In a world where choices spark, <br/>
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