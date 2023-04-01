import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Video2({ info, data, isSearchData }) {
  const navigate = useNavigate();

  return (
    <li
      className="p-1 cursor-pointer	flex w-full	"
      onClick={e => {
        console.log(e.currentTarget);
        navigate(`/detail/${isSearchData ? info.id.videoId : info.id}`, {
          state: {
            info,
            data,
            isSearchData,
          },
        });
      }}
    >
      <img
        className="w-6/12 pr-2"
        src={info.snippet.thumbnails.medium.url}
        alt={info.snippet.title}
      />
      <div className="w-6/12	">
        <div className="text-xs text-white font-semibold mb-1">
          {info.snippet.title}
        </div>
        <div className="text-xs text-gray-50">{info.snippet.channelTitle}</div>
        <div className="text-xs text-gray-50">1 day ago</div>
      </div>
    </li>
  );
}
