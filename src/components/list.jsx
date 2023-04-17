import React from 'react';
import Video from './VideoCard';

export default function List({ items }) {
  // console.log(items);
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 gap-y-4">
      {items &&
        items.map(item => {
          // console.log(item);
          return <Video info={item} key={item.id} />;
        })}
    </ul>
  );
}
