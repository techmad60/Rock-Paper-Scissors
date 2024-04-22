import { Freckle, Barlow } from "../../fonts/fonts";
import Image from "next/image"
export default function LevelOne() {

    return (
      <div className={`${Freckle.className}flex justify-center 
      flex-col `}>
         <p className="text-center text-white"> Level 1 </p>
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

         <div className="bg-triangle bg-no-repeat flex flex-col justify-center items-center  top-48 relative w-full h-full"> 
           <div className="bg-white w-[150px] h-[150px] icon rounded-full flex items-center justify-center border-[18px] border-rock-1 absolute">
                <Image
                    className="p-2"
                    src="/images/icon-rock.svg"
                    alt="Rock"
                    width={75}
                    height={75}
                    priority
                />
            </div>
            
            <div className="bg-white w-[150px] h-[150px]  icon rounded-full flex items-center justify-center border-[18px] border-paper-1 absolute ">
                <Image
                    className="p-2"
                    src="/images/icon-paper.svg"
                    alt="Paper"
                    width={75}
                    height={75}
                    priority
                />
            </div>
            
            <div className="bg-white w-[150px] h-[150px]  icon rounded-full flex items-center justify-center border-[18px] border-scissors-1 absolute">
                <Image
                    className="p-2"
                    src="/images/icon-scissors.svg"
                    alt="Scissors"
                    width={75}
                    height={75}
                    priority
                />
            </div>

         </div>
      </div>
    ) 
  }