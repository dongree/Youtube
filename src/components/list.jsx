import React from 'react';
import Video from './video';

export default function List({ items }) {
  return (
    <ul className="flex flex-wrap">
      {items.map(item => {
        console.log(item);
        return (
          <Video
            info={item}
            key={
              item.id.kind
                ? item.id.videoId
                  ? item.id.videoId
                  : item.id.channelId
                : item.id
            }
            data={items}
          />
        );
      })}
    </ul>
  );
}
