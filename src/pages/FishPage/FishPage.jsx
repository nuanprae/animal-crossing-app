import { useState, useEffect } from 'react';
import ItemCardsGrid from '../../components/ItemCardsGrid/ItemCardsGrid';
import DropdownButton from '../../components/DropdownButton/DropdownButton';
import { getDailyAcnhResults } from '../../utils';

import './fish-page.css';

const FishPage = () => {
  const [fish, setFish] = useState([]);
  const [fishLocations, setFishLocations] = useState([]);

  useEffect(() => {
    fetch('https://acnhapi.com/v1/fish/')
      .then(response => response.json())
      .then((result) => {
        setFish(getDailyAcnhResults(result));
        setFishLocations([...new Set(getDailyAcnhResults(result).map((obj) => obj.availability.location))]);
      })
  }, [])

  return (
    <main className="page-container">
      <ItemCardsGrid data={fish} />
      <section className="sort">
        <DropdownButton label={'price'} options={['price', 'name']} />
        <DropdownButton label={'location'} options={fishLocations} />
        <DropdownButton label={'languages'} options={['English', 'German', 'French']} />
      </section>
    </main>
  );
};

export default FishPage;
