import React, { use } from 'react';

async function fetchData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export default function HelloComponent() {
  const url = 'https://api.example.com/data';
  const data = use(fetchData(url));

  return <div>{JSON.stringify(data)}</div>;
}
