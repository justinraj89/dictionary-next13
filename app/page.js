'use client'
import { useState } from "react";
//-----------------------------------
import Search from "./Search";
import WordTitle from "./WordTitle";
//===============================

export default function Home() {

  const [word, setWord] = useState('')
  
  return (
    <div>
      <Search setWord={setWord}/>
      <WordTitle word={word} setWord={setWord}/>
    </div>
  );
}
