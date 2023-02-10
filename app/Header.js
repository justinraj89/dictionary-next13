import DarkModeButton from "./DarkModeButton"
import { BookOpenIcon } from "@heroicons/react/24/outline";
import {Nanum_Pen_Script} from '@next/font/google'

function Header() {


  return (
    <header className="flex justify-between pt-4">
        <BookOpenIcon className="h-8 w-8 ml-4 text-gray-500"/>
        <DarkModeButton />
    </header>
  )
}

export default Header