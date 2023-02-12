"use client";
import { useState } from "react";
import API from "./api";
//==================================

function Search({ setWord, error}) {
  //State
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
    if (!input) return;
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const searchedWord = await API.fetchSearchWord(input);
      setWord(searchedWord);
      setInput("");
    } catch (err) {
      console.log(err);
    }
  };
  //----------------------------------------------

  return (
    <div>
      <form
        className="mx-auto mt-10 flex justify-center"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="lg:flex lg:w-full w-3/5 rounded-lg px-5 py-3 text-black dark:text-gray-100 font-semibold focus:outline-none font-serif tracking-widest"
          placeholder="Search for a word"
          onChange={handleChange}
          value={input}
        />
        <div className="sm:mt-0 ml-3">
          <button
            className="w-full rounded-lg px-5 py-3 bg-gray-500 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-base text-stone-50 font-bold hover:text-active hover:bg-gray-400 sm:px-10 font-serif tracking-widest"
            type="submit"
            disabled={!input}
          >
            Search
          </button>
        </div>
      </form>
      {error ? (
        <div className="block text-xl text-red-400 font-bold pt-4 flex justify-center font-serif container px-4 text-center">
          Sorry that word is not in our database ☹️ please try another word.
        </div>
      ) : null}
    </div>
  );
}

export default Search;
