"use client";
import { useRef, useEffect } from "react";
import { PlayCircleIcon } from "@heroicons/react/24/outline";
import Meaning from "./Meaning";
//===============================

function Word({ word }) {

  // Checks if there are phonetics properties returned from API
  const validPhonetics = word.phonetics?.find(
    (phonetics) => phonetics.text && phonetics.audio
  );

  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio(validPhonetics?.audio)
  }, [word])

  const handlePlay = () => {
    audioRef.current.play()
  };





  //-------------------------------------------------------------------------
  return (
    <main className="mt-14 container px-4 lg:px-0">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl lg:text-6xl font-serif font-semibold tracking-wider">{word.word}</h1>
          <p className="text-indigo-500 pt-3 text-xl font-serif">
            {validPhonetics?.text}
          </p>
        </div>
        {validPhonetics?.audio && (
          <PlayCircleIcon
            onClick={handlePlay}
            className="h-20 w-20 text-indigo-500 hover:cursor-pointer"
          />
        )}
      </div>
    </main>
  );
}

export default Word;
