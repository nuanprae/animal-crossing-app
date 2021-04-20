import { useState, useEffect } from 'react';
import axios from 'axios';
import ItemCardsGrid from '../../components/ItemCardsGrid/ItemCardsGrid';
import DropdownButton from '../../components/DropdownButton/DropdownButton';
import { getDailyAcnhResults } from '../../utils';

import './fish-page.css';

const FishPage = () => {
  const [fish, setFish] = useState([]);
  const [fishLocations, setFishLocations] = useState([]);

  useEffect(() => {
    const fetchFishData = async () => {
      try {
        const apiCallResponse = await axios.get('https://acnhapi.com/v1/fish/');
        const dailyFishResults = getDailyAcnhResults(apiCallResponse.data)
        setFish(dailyFishResults);
        setFishLocations([...new Set(dailyFishResults.map((obj) => obj.availability.location))])
      } catch (error) {
        console.error(error);
      }
    }
    fetchFishData();
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
