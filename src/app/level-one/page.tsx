import { Freckle, Barlow } from "../../fonts/fonts";
import Image from "next/image"
export default function LevelOne() {

    return (
      <div className={`${Freckle.className} flex justify-center 
      flex-col`}>
         <p className={`${Freckle.className} text-center text-white`}> Level 1 </p>
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

         <div className="bg-triangle bg-no-repeat flex flex-col justify-center items-center self-center justify-self-center relative w-[250px] h-[250px] top-40 bg-contain"> 
           <div className="bg-white w-[120px] h-[120px] icon rounded-full flex items-center justify-center border-[18px] border-rock-2 absolute top-[-70px] right-[160px]">
                <Image
                    className="p-4"
                    src="/images/icon-rock.svg"
                    alt="Rock"
                    width={70}
                    height={70}
                    priority
                />
            </div>
            
            <div className="bg-white w-[120px] h-[120px]  icon rounded-full flex items-center justify-center border-[18px] border-paper-2 absolute top-[-70px] left-[160px]">
                <Image
                    className="p-4"
                    src="/images/icon-paper.svg"
                    alt="Paper"
                    width={70}
                    height={70}
                    priority
                />
            </div>
            
            <div className="bg-white w-[120px] h-[120px]  icon rounded-full flex items-center justify-center border-[18px] border-scissors-2 absolute 
            top-[100px]">
                <Image
                    className="p-4"
                    src="/images/icon-scissors.svg"
                    alt="Scissors"
                    width={70}
                    height={70}
                    priority
                />
            </div>

         </div>
      </div>
    ) 
  }