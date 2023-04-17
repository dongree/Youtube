import React from 'react';
import { useLocation } from 'react-router-dom';
import ChannelInfo from '../components/ChannelInfo';
import RelatedVideos from '../components/RelatedVideos';

export default function Detail() {
  const {
    state: { info },
  } = useLocation();
  const { title, channelTitle, channelId, description } = info.snippet;

  return (
    <section className="flex flex-col lg:flex-row">
      <article className="basis-4/6	">
        <iframe
          id="player"
          type="text/html"
          width="100%"
          height="500"
          src={`http://www.youtube-nocookie.com/embed/${info.id}?enablejsapi=1`}
          title={title}
        ></iframe>
        <div className="p-8">
          <h2 className="text-xl text-white font-bold ">{title}</h2>
          <ChannelInfo id={channelId} name={channelTitle} />
          <pre className="text-sm text-white whitespace-pre-wrap">
            {description}
          </pre>
        </div>
      </article>
      <section className="basis-2/6">
        <RelatedVideos id={info.id} />
      </section>
    </section>
  );
}
