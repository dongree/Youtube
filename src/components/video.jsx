import React from 'react';

export default function Video({ info }) {
  return (
    <li className="basis-1/5 p-1 transition duration-150 ease-out hover:ease-in hover:scale-110	cursor-pointer	">
      <img src={info.thumbnails.medium.url} alt={info.title} />
      <div className="text-sm text-white font-semibold mb-1">{info.title}</div>
      <div className="text-xs text-white">{info.channelTitle}</div>
      <div className="text-xs text-white">1 day ago</div>
    </li>
  );
}
