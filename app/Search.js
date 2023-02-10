'use client'
import { useState } from "react";
//==================================

function Search() {

    const [input, setInput] = useState('')
    const [isValid, setIsValide] = useState(true)

    const handleChange = (e) => {
        setInput(e.target.value)
        if(!input) return
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Ayo')
    }

  return (
    <form
      className="mx-auto mt-10 flex justify-center"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="lg:flex lg:w-full w-3/5 rounded-lg px-5 py-3 text-black dark:text-gray-100 font-semibold focus:outline-none"
        placeholder="Search for a word"
        onChange={handleChange}
      />
      <div className="sm:mt-0 ml-3">
        <button
          className="w-full rounded-lg px-5 py-3 bg-gray-500 text-base text-stone-50 font-bold hover:text-active hover:bg-zinc-700 sm:px-10"
          type="submit"
        >
          Search
        </button>
      </div>
    </form>
  )
}

export default Search