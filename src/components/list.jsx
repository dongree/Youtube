import React from 'react';
import Video from './VideoCard';

export default function List({ items }) {
  // console.log(items);
  return (
    <ul className="flex flex-wrap">
      {items &&
        items.map(item => {
          // console.log(item);
          return <Video info={item} key={item.id} data={items} />;
        })}
    </ul>
  );
}
