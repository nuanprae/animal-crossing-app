import { useState, useEffect } from 'react';
import axios from 'axios';
import ItemCardsGrid from '../../components/ItemCardsGrid/ItemCardsGrid';
import DropdownButton from '../../components/DropdownButton/DropdownButton';
import { getDailyAcnhResults } from '../../utils';

import './sea-creatures-page.css';

const SeaCreaturesPage = () => {
  const [allSeaCreatures, setAllSeaCreatures] = useState([]);
  const [speedTypes, setSpeedTypes] = useState([]);
  const [seaCreatures, setSeaCreatures] = useState([]);
  const [language, setLanguage] = useState('name-EUen');

  useEffect(() => {
    const fetchSeaCreaturesData = async () => {
      const apiCallResponse = await axios.get('https://acnhapi.com/v1/sea/');
      const dailySeaCreaturesResults = getDailyAcnhResults(apiCallResponse.data);
      setAllSeaCreatures(dailySeaCreaturesResults);
      setSeaCreatures(dailySeaCreaturesResults);
      setSpeedTypes(['All', ...new Set(dailySeaCreaturesResults.map((obj) => obj.speed))]);
    };
    fetchSeaCreaturesData();
  }, []);

  useEffect(() => {});
  const handleSpeed = (event) => {
    if (event.target.value === 'All') {
      setSeaCreatures(allSeaCreatures);
    } else {
      setSeaCreatures(
        allSeaCreatures.filter((seaCreature) => seaCreature.speed === event.target.value),
      );
    }
  };

  const handleLanguage = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <main className="page-container">
      <section className="sort">
        <DropdownButton label={'sort by'} options={['price', 'name']} />
        <DropdownButton label={'speed'} onChange={handleSpeed} options={speedTypes} />
        <DropdownButton
          label={'languages'}
          onChange={handleLanguage}
          options={['name-EUen', 'name-JPja']}
        />
      </section>
      <ItemCardsGrid data={seaCreatures} language={language} />
    </main>
  );
};

export default SeaCreaturesPage;
