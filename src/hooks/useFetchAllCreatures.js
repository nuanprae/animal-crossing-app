import { useState } from 'react';

import useFetchData from '../hooks/useFetchData';

const useFetchAllCreatures = () => {
  const fishData = useFetchData('https://acnhapi.com/v1/fish/');
  const seaCreaturesData = useFetchData('https://acnhapi.com/v1/sea/');
  const bugsData = useFetchData('https://acnhapi.com/v1/bugs/');

  return {
    fishData,
    seaCreaturesData,
    bugsData,
  };
};

export default useFetchAllCreatures;
