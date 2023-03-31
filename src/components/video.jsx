import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Video({ info, data }) {
  const navigate = useNavigate();

  return (
    <li
      className="basis-1/5 p-1 transition duration-150 ease-out hover:ease-in hover:scale-110	cursor-pointer	"
      onClick={e => {
        console.log(e.currentTarget);
        navigate(`/detail/${info.id}`, {
          state: {
            info,
            data,
          },
        });
      }}
    >
      <img src={info.snippet.thumbnails.medium.url} alt={info.snippet.title} />
      <div className="text-sm text-white font-semibold mb-1">
        {info.snippet.title}
      </div>
      <div className="text-xs text-white">{info.snippet.channelTitle}</div>
      <div className="text-xs text-white">1 day ago</div>
    </li>
  );
}
