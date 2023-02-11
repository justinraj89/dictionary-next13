"use client";
import { useState } from "react";
import axios from "axios";
//-----------------------------------
import Search from "./Search";
import Word from "./Word";
//===============================

export default function Home() {
  // STATE
  const [word, setWord] = useState("");
  const [error, setError] = useState(false);

  // API CALL
  const fetchSearchWord = async (search) => {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${search}`;
    try {
      const response = await axios.get(url);
      const wordData = response.data[0];
      return wordData;
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };



  //================================================================
  return (
    <div>
      <Search setWord={setWord} fetchSearchWord={fetchSearchWord} />
      {word && <Word word={word} error={error} />}
    </div>
  );
}
