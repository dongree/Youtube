import React from 'react';
import { useEffect, useState } from 'react';
import Header from '../components/header';
import List from '../components/list';

export default function Home() {
  const [data, setData] = useState([]);
  const handleSearch = text => {
    fetch(`videos/search.json`)
      .then(res => res.json())
      .then(data => {
        setData(data.items);
      });
  };

  useEffect(() => {
    fetch(`videos/popular.json`)
      .then(res => res.json())
      .then(data => {
        // console.log(data.items);
        setData(data.items);
      });
  }, []);

  return (
    <>
      <Header onSearch={handleSearch} />
      <List items={data} />
    </>
  );
}
