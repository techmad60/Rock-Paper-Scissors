import ScoreBoard from "@/components/ScoreBoard";
// import { Barlow } from "@/fonts/fonts";

export default function Result() {
    return (
        <div className="min-h-screen bg-background flex flex-col justify-center">
            <ScoreBoard />
            <div className="flex flex-col justify-center items-center">
                <div>
                    <p>YOU PICKed</p>
                </div>
                <div>
                    THE HOUSE PICKED
                </div>
            </div>
        </div>
       
    )
};
