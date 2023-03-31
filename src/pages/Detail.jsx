import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/header';
import VideoDetail from '../components/videoDetail';
import ListVertical from '../components/listVertical';

export default function Detail() {
  const location = useLocation();
  const info = location.state.info;
  const data = location.state.data;

  console.log(info);

  return (
    <div>
      <Header />
      <div className="flex">
        <VideoDetail info={info} />
        <ListVertical items={data} id={info.id} />
      </div>
    </div>
  );
}
