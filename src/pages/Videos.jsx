import React from 'react';
import { useParams } from 'react-router-dom';
import List from '../components/list';
import { useQuery } from '@tanstack/react-query';
import { useYoutubeApi } from '../context/YoutubeApiContext';

export default function Search() {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();

  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(['videos', keyword], () => youtube.search(keyword));

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong</p>}
      <List items={videos} />
    </>
  );
}
