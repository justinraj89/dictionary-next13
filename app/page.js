'use client'
import { useState } from "react";
//-----------------------------------
import Search from "./Search";
import Word from "./Word";
//===============================

export default function Home() {

  const [word, setWord] = useState('')
  
  return (
    <div>
      <Search setWord={setWord}/>
      <Word word={word} setWord={setWord}/>
    </div>
  );
}
