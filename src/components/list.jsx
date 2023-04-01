import React from 'react';
import Video from './video';

export default function List({ items, isSearchData }) {
  return (
    <ul className="flex flex-wrap">
      {items.map(item => {
        console.log(item);
        return (
          <Video
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
