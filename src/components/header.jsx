import React, { useState } from 'react';
import { AiOutlineSearch, AiFillYoutube } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

export default function Header({ onSearch }) {
  const [text, setText] = useState('');
  const handleChange = e => setText(e.target.value);
  const handleSubmit = e => {
    e.preventDefault();
    if (text.trim().length === 0) {
      return;
    }
    onSearch(text);
    setText('');
  };

  const navigate = useNavigate();

  return (
    <header className="flex justify-between items-center py-3 px-1 border-b-2 border-gray-400	">
      <div
        className="flex items-center cursor-pointer"
        onClick={() => {
          navigate(`/`, {});
        }}
      >
        <button className="text-4xl text-red-600 mr-1">
          <AiFillYoutube />
        </button>
        <div className="text-3xl font-medium text-white">Youtube</div>
      </div>
      <form className="flex items-center w-3/5 mr-24" onSubmit={handleSubmit}>
        <input
          className="w-full bg-black text-white h-10 px-3"
          type="text"
          placeholder="Search..."
          onChange={handleChange}
          value={text}
        ></input>
        <button className="text-2xl bg-gray-400 h-10 w-10 flex justify-center items-center text-white ">
          <AiOutlineSearch />
        </button>
      </form>
    </header>
  );
}
