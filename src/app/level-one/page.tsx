import { Freckle, Barlow } from "../../fonts/fonts";
import Image from "next/image"
export default function LevelOne() {

    return (
        <div className={`${Freckle.className} flex justify-center 
        flex-col`}>
         <p className={`${Freckle.className} text-center text-white`} >  Level 1 
          </p>
         <div className="flex flex-col border-[3px] border-header-outline rounded-md p-1">
            <div className={` ${Barlow.className} flex justify-between items-center  m-1`}>
            <div className={` ${Barlow.className} text-white font-semibold text-xl leading-4 pl-4`}> 
                <p>ROCK</p>
                <p>PAPER</p>
                <p>SCISSORS</p>
            </div>

            <div className=" text-gray-700 bg-white flex flex-col justify-center items-center border  rounded-sm w-[63px] h-[63px]">
                <p className="text-xs text-score-text tracking-wider font-semibold ">SCORE</p>
                <p className="text-4xl font-bold text-dark-text" >12</p>
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
                <button className="text-white p-2">Rules</button>
            </div>
            
        </div>
    ) 
  }