"use client";
import { useState } from "react";
import LevelOne from "@/components/LevelOne";


export default function LevelPage() {
    const handleResult = (userChoice: string, computerChoice: string) => {
        console.log("User choice:", userChoice);
        console.log("Computer choice:", computerChoice);
    };
    return (
        <>
        <LevelOne onResult={handleResult}/>
    </>
    )
}