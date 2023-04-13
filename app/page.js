"use client";
import { useState, useEffect } from "react";
import axios from "axios";
//-----------------------------------
import Search from "./Search";
import Word from "./Word";
//===============================

export default function Home() {
  // STATE
  const [word, setWord] = useState(null);
  const [error, setError] = useState(false);

  // API CALL
  const fetchSearchWord = async (search) => {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${search}`;
    try {
      const response = await axios.get(url);
      const wordData = response.data[0];
      setError(false);
      return wordData;
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };

  const getDefaultWord = async () => {
    const defaultWord = "dictionary";
    const wordData = await fetchSearchWord(defaultWord);
    setWord(wordData);
  };

  useEffect(() => {
    getDefaultWord();
  }, []);


  //================================================================
  return (
    <div>
      <Search
        setWord={setWord}
        fetchSearchWord={fetchSearchWord}
        error={error}
      />
      {word && <Word word={word} />}
    </div>
  );
}
