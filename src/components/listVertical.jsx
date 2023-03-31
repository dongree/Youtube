import React from 'react';
import Video2 from './video2';

export default function ListVertical({ items, id }) {
  return (
    <ul className="flex basis-1/3	flex-col	">
      {items.map(item => {
        if (item.id === id) return;
        return <Video2 info={item} key={item.id} data={items} />;
      })}
    </ul>
  );
}
