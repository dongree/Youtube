import React from 'react';

export default function VideoDetail({ info }) {
  return (
    <div className="basis-2/3	">
      <iframe
        id="player"
        type="text/html"
        width="100%"
        height="500"
        src={`http://www.youtube-nocookie.com/embed/${info.id}?enablejsapi=1`}
      ></iframe>
      <div className="text-lg text-white font-semibold ">
        {info.snippet.title}
      </div>
      <div className="text-sm text-white">{info.snippet.channelTitle}</div>
      <div className="text-sm text-white">{info.snippet.description}</div>
    </div>
  );
}
