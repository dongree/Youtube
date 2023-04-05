import React, { useEffect, useState } from 'react';
import { AiOutlineSearch, AiFillYoutube } from 'react-icons/ai';
import { useNavigate, useParams } from 'react-router-dom';

export default function Header() {
  const [text, setText] = useState('');
  const { keyword } = useParams();
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();

    fetch(`videos/search.json`)
      .then(res => res.json())
      .then(data => {
        navigate(`/videos/${text}`, {
          state: {
            data: data.items,
          },
        });
      });

    // fetch(
    //   `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${text}&key=AIzaSyB3hVuIaqnPrAHbsLt7uaOTms6SawTM4hE`
    // )
    //   .then(res => res.json())
    //   .then(data => {
    //     navigate(`/videos/${text}`, {
    //       state: {
    //         data: data.items,
    //       },
    //     });
    //   });
  };

  useEffect(() => setText(keyword || ''), [keyword]);

  return (
    <header className="flex justify-between items-center py-3 px-1 border-b-2 border-gray-400	">
      <div
        className="flex items-center cursor-pointer"
        onClick={() => {
          navigate(`/`, {});
        }}
      >
        <AiFillYoutube className="text-4xl text-brand mr-1" />
        <h1 className="text-3xl font-medium ">Youtube</h1>
      </div>
      <form
        className="w-full flex justify-center mr-24"
        onSubmit={handleSubmit}
      >
        <input
          className="w-7/12 bg-black  h-10 px-3"
          type="text"
          placeholder="Search..."
          onChange={e => setText(e.target.value)}
          value={text}
        ></input>
        <button className="text-2xl bg-gray-400 px-3 ">
          <AiOutlineSearch />
        </button>
      </form>
    </header>
  );
}
