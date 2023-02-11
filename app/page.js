'use client'
import { useState, useEffect } from "react";
import fetchSearchWord from "./fetchSearchWord";
//-----------------------------------
import Search from "./Search";
import Word from "./Word";
//===============================

export default function Home() {

  const [word, setWord] = useState('')

  
  return (
    <div>
      <Search setWord={setWord}/>
      {word && <Word word={word}/>}
    </div>
  );
}
