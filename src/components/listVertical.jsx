import React from 'react';
import Video2 from './video2';

export default function ListVertical({ items, id }) {
  return (
    <ul className="flex basis-1/3	flex-col	">
      {items.map(item => {
        if (
          (item.id.kind
            ? item.id.videoId
              ? item.id.videoId
              : item.id.channelId
            : item.id) === id
        )
          return;
        return (
          <Video2
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
