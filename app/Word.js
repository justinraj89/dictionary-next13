"use client";
import { useRef, useEffect } from "react";
import { PlayCircleIcon } from "@heroicons/react/24/outline";

//===============================

function Word({ word }) {
  
  const definitions = word.meanings[0].definitions.map((definition, index) => (
    <li className="mt-4" key={index}>
      <p className="font-serif text-gray-500 dark:text-gray-100 tracking-wide">
        {definition.definition}
      </p>
      {definition.example && (
        <p className="text-gray-500 mt-3 font-serif font-semibold">
          Example: {definition.example}
        </p>
      )}
    </li>
  ));

  const synonymsAPI = word.meanings[0].synonyms.map((synonym, index) => (
    <li className="mt-4" key={index}>
      <p className="font-serif text-gray-500 dark:text-gray-100 tracking-wide">
        {synonym}
      </p>
    </li>
  ));

  // Checks if there are phonetics properties returned from API
  const validPhonetics = word.phonetics?.find(
    (phonetics) => phonetics.text && phonetics.audio
  );

  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio(validPhonetics?.audio);
  }, [word]);

  const handlePlay = () => {
    audioRef.current.play();
  };

  //-------------------------------------------------------------------------

  return (
    <main className="mt-10 container px-4 lg:px-0">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl lg:text-5xl font-serif text-gray-500 dark:text-gray-100 font-semibold tracking-wider">
            {word.word}
          </h1>
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
      {word ? (
        <section className="mt-8 text-sans">
          <div className="flex items-center mb-8">
            <h2 className="font-bold tracking-wide italic mr-4 text-gray-500 dark:text-gray-100">
              {word.meanings[0].partOfSpeech}
            </h2>
            <hr className="w-full" />
          </div>
          <p className="text-gray-500 dark:text-gray-100 font-serif text-lg font-bold">
            Definition
          </p>
          <ul className="list-disc mx-4 mt-4 marker:text-indigo-500 mb-8">
            {definitions}
          </ul>
        </section>
      ) : null}

      {word.meanings[0].synonyms.length ? (
        <section>
          <hr className="w-full mt-4" />
          <p className="text-gray-500 dark:text-gray-100 font-serif text-lg font-bold mt-4">
            Synonym
          </p>
          <ul className="list-disc mx-4 mt-4 marker:text-indigo-500">
            {synonymsAPI}
          </ul>
          <hr className="w-full mt-8 mb-10" />
        </section>
      ) : null}
    </main>
  );
}

export default Word;
