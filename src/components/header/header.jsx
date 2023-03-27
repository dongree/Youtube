import React from 'react';
import { AiOutlineSearch, AiFillYoutube } from 'react-icons/ai';

export default function Header() {
  return (
    <header className="flex justify-between items-center py-3 px-1 border-b-2 border-gray-400	">
      <div className="flex items-center">
        <button className="text-4xl text-red-600 mr-1">
          <AiFillYoutube />
        </button>
        <div className="text-3xl font-medium text-white">Youtube</div>
      </div>
      <form className="flex items-center w-3/5 mr-24">
        <input
          className="w-full bg-black text-white h-10 px-3"
          type="text"
          placeholder="Search..."
        ></input>
        <button className="text-2xl bg-gray-400 h-10 w-10 flex justify-center items-center text-white ">
          <AiOutlineSearch />
        </button>
      </form>
    </header>
  );
}
