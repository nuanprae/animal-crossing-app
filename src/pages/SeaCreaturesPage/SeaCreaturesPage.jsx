import { useState, useEffect } from 'react';
import axios from 'axios';
import ItemCardsGrid from '../../components/ItemCardsGrid/ItemCardsGrid';
import DropdownButton from '../../components/DropdownButton/DropdownButton';
import { getDailyAcnhResults } from '../../utils';

import './sea-creatures-page.css';

const SeaCreaturesPage = () => {
  const [seaCreatures, setSeaCreatures] = useState([]);
  const [speed, setSpeed] = useState([]);

  useEffect(() => {
    const fetchSeaCreaturesData = async () => {
      const apiCallResponse = await axios.get('https://acnhapi.com/v1/sea/');
      const dailySeaCreaturesResults = getDailyAcnhResults(apiCallResponse.data);
      setSeaCreatures(dailySeaCreaturesResults);
      setSpeed([...new Set(dailySeaCreaturesResults.map((obj) => obj.speed))]);
    }
    fetchSeaCreaturesData();
  }, [])
  
  return (
    <main className="page-container">
      <ItemCardsGrid data={seaCreatures}/>
      <section className="sort">
        <DropdownButton label={'price'} options={['price', 'name']} />
        <DropdownButton label={'location'} options={speed} />
        <DropdownButton label={'languages'} options={['English', 'German', 'French']} />
      </section>
    </main>
  );
};

export default SeaCreaturesPage;
