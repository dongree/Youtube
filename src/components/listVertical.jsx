import React from 'react';
import Video2 from './video2';

export default function ListVertical({ items, id, isSearchData }) {
  return (
    <ul className="flex basis-1/3	flex-col	">
      {items.map(item => {
        if ((isSearchData ? item.id.videoId : item.id) === id) return;
        return (
          <Video2
            info={item}
            key={isSearchData ? item.id.videoId : item.id}
            data={items}
            isSearchData={isSearchData}
          />
        );
      })}
    </ul>
  );
}
