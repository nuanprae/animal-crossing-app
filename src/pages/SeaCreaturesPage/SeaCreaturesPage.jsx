import { useState, useEffect } from 'react';
import axios from 'axios';
import ItemCardsGrid from '../../components/ItemCardsGrid/ItemCardsGrid';
import DropdownButton from '../../components/DropdownButton/DropdownButton';
import { getDailyAcnhResults } from '../../utils';

import './sea-creatures-page.css';

const SeaCreaturesPage = () => {
  const [allSeaCreatures, setAllSeaCreatures] = useState([]);
  const [language, setLanguage] = useState('name-EUen');
  const [seaCreatures, setSeaCreatures] = useState([]);
  const [speedTypes, setSpeedTypes] = useState([]);
  const [sortPrice, setSortPrice] = useState('');

  useEffect(() => {
    const fetchSeaCreaturesData = async () => {
      try {
        const apiCallResponse = await axios.get('https://acnhapi.com/v1/sea/');
        const dailySeaCreaturesResults = getDailyAcnhResults(apiCallResponse.data);
        setAllSeaCreatures(dailySeaCreaturesResults);
        setSeaCreatures(dailySeaCreaturesResults.sort((a, b) => b.price - a.price));

        const fetchedSpeedTypes = new Set(dailySeaCreaturesResults.map((obj) => obj.speed));
        setSpeedTypes(['All', ...fetchedSpeedTypes]);
      } catch (error) {
        console.error(error);
      }
    };
    fetchSeaCreaturesData();
  }, []);

  const handleSort = (event) => {
    if (event.target.value === 'Highest price') {
      setSeaCreatures([...seaCreatures].sort((a, b) => b.price - a.price));
      setSortPrice(event.target.value);
    } else if (event.target.value === 'Lowest price') {
      setSeaCreatures([...seaCreatures].sort((a, b) => a.price - b.price));
      setSortPrice(event.target.value);
    }
  };

  const handleSpeed = (event) => {
    if (event.target.value === 'All' && sortPrice === 'Highest price') {
      setSeaCreatures([...allSeaCreatures].sort((a, b) => b.price - a.price));
    } else if (event.target.value === 'All' && sortPrice === 'Lowest price') {
      setSeaCreatures([...allSeaCreatures].sort((a, b) => a.price - b.price));
    } else if (event.target.value && sortPrice === 'Highest price') {
      setSeaCreatures(
        [...allSeaCreatures.filter((seaCreature) => seaCreature.speed === event.target.value)].sort(
          (a, b) => b.price - a.price,
        ),
      );
    } else if (event.target.value && sortPrice === 'Lowest price') {
      setSeaCreatures(
        [...allSeaCreatures.filter((seaCreature) => seaCreature.speed === event.target.value)].sort(
          (a, b) => a.price - b.price,
        ),
      );
    }
  };

  const handleLanguage = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <main className="page-container">
      <section className="sort">
        <DropdownButton
          label={'sort by'}
          onChange={handleSort}
          options={['Highest price', 'Lowest price']}
        />
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
