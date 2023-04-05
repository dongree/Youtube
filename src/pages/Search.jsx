import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/header';
import List from '../components/list';

export default function Search() {
  const location = useLocation();
  const data = location.state.data;

  return <List items={data} />;
}
