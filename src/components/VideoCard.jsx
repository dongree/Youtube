import React from 'react';
import { useNavigate } from 'react-router-dom';
import { format } from 'timeago.js';

export default function VideoCard({ info }) {
  const navigate = useNavigate();
  const { title, thumbnails, channelTitle, publishedAt } = info.snippet;
  return (
    <li
      className="basis-1/5 p-1 transition duration-150 ease-out hover:ease-in hover:scale-110	cursor-pointer	"
      onClick={e => {
        navigate(`/videos/watch/${info.id}`);
      }}
    >
      <img className="w-full" src={thumbnails.medium.url} alt={title} />
      <div>
        <p className="font-semibold line-clamp-2">{title}</p>
        <p className="text-sm opacity-80">{channelTitle}</p>
        <p className="text-sm opacity-80 ">{format(publishedAt)}</p>
      </div>
    </li>
  );
}
