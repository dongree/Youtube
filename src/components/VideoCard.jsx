import React from 'react';
import { useNavigate } from 'react-router-dom';
import { format } from 'timeago.js';

export default function VideoCard({ info, type }) {
  const { title, thumbnails, channelTitle, publishedAt } = info.snippet;
  const navigate = useNavigate();
  const isList = type === 'list';
  return (
    <li
      className={`${
        isList ? 'flex gap-1 m-2' : ''
      } transition duration-150 ease-out hover:ease-in hover:scale-110	cursor-pointer`}
      onClick={e => {
        navigate(`/videos/watch/${info.id}`, {
          state: {
            info,
          },
        });
      }}
    >
      <img
        className={isList ? 'w-40 mr-2' : 'w-full'}
        src={thumbnails.medium.url}
        alt={title}
      />
      <div>
        <p className="font-semibold line-clamp-2">{title}</p>
        <p className="text-sm opacity-80">{channelTitle}</p>
        <p className="text-sm opacity-80 ">{format(publishedAt)}</p>
      </div>
    </li>
  );
}
