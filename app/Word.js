"use client";
import { useState, useEffect } from "react";
import { PlayCircleIcon } from "@heroicons/react/24/outline";
import API from "./api";
//===============================

function Word({ word }) {
  const [synonyms, setSynonyms] = useState([]);

  useEffect(() => {
    const fetchSynos = async () => {
      const synos = await API.fetchSynonyms(word.word);
      await setSynonyms(synos);
    };
    fetchSynos();
  }, [word]);

  const definitions = word.results.map((definition, index) => (
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

  console.log(synonyms, "SYNONYMS");

  const synonymsEl = synonyms.map((synonym, index) => (
    <li className="mt-4" key={index}>
      <p className="font-serif text-gray-500 dark:text-gray-100 tracking-wide">
        {synonym}
      </p>
    </li>
  ));

  // //-------------------------------------------------------------------------

  return (
    <main className="mt-10 container px-4 lg:px-0">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl lg:text-5xl font-serif text-gray-500 dark:text-gray-100 font-semibold tracking-wider">
            {word.word}
          </h1>
          <p className="text-indigo-500 pt-3 text-xl font-serif italic">
            {word.pronunciation ? word.pronunciation.all : null}
          </p>
        </div>
      </div>

      {word ? (
        <section className="mt-8 text-sans">
          <div className="flex items-center mb-8">
            {/* <h2 className="font-bold tracking-wide italic mr-4 text-gray-500 dark:text-gray-100">
              {word.meanings[0].partOfSpeech}
            </h2> */}
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

      {synonyms.length ? (
        <section>
          <hr className="w-full mt-4" />
          <p className="text-gray-500 dark:text-gray-100 font-serif text-lg font-bold mt-4">
            Synonym
          </p>
          <ul className="list-disc mx-4 mt-4 marker:text-indigo-500">
            {synonymsEl}
          </ul>
          <hr className="w-full mt-8 mb-10" />
        </section>
      ) : null}
    </main>
  );
}

export default Word;
