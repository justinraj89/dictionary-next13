"use client";
import { useRef, useEffect } from "react";
import { PlayCircleIcon } from "@heroicons/react/24/outline";
//===============================

function WordTitle({ word }) {

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

  return (
    <main className="mt-10 container px-4 lg:px-0">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-5xl lg:text-6xl font-serif">{word.word}</h1>
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

export default WordTitle;
