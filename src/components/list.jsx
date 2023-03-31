import React from 'react';
import Video from './video';

export default function List({ items }) {
  return (
    <ul className="flex flex-wrap">
      {items.map(item => (
        <Video info={item} key={item.id} data={items} />
      ))}
    </ul>
  );
}
