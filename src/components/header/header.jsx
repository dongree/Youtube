import React from 'react';
import { AiOutlineSearch, AiFillYoutube } from 'react-icons/ai';

export default function Header() {
  return (
    <header className="flex justify-center items-center">
      <div className="flex items-center">
        <div>
          <AiFillYoutube />
        </div>
        <div className="text-2xl font-medium">Youtube</div>
      </div>
      <form className="flex items-center">
        <input className="w-200" type="text" placeholder="Search..."></input>
        <button>
          <AiOutlineSearch />
        </button>
      </form>
    </header>
  );
}
