"use client";
import { useState } from "react";

//-----------------------------------
import Search from "./Search";
import Word from "./Word";
//===============================

export default function Home() {
  // STATE
  const [word, setWord] = useState(null);
  const [error, setError] = useState(false);


  //================================================================
  return (
    <div>
      <Search
        setWord={setWord}
        error={error}
      />
      {word && <Word word={word} />}
    </div>
  );
}
