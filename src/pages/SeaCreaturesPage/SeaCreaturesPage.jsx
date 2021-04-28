import { useState, useEffect } from 'react';
import axios from 'axios';
import ItemCardsGrid from '../../components/ItemCardsGrid/ItemCardsGrid';
import DropdownButton from '../../components/DropdownButton/DropdownButton';
import { getDailyAcnhResults, sortAscendingOrder, sortDescendingOrder } from '../../utils';

import './sea-creatures-page.css';

const SeaCreaturesPage = () => {
  const [allSeaCreatures, setAllSeaCreatures] = useState([]);
  const [language, setLanguage] = useState('name-EUen');
  const [seaCreatures, setSeaCreatures] = useState([]);
  const [speedTypes, setSpeedTypes] = useState([]);
  const [sortType, setSortType] = useState('Highest price');

  useEffect(() => {
    const fetchSeaCreaturesData = async () => {
      try {
        const apiCallResponse = await axios.get('https://acnhapi.com/v1/sea/');
        const dailySeaCreaturesResults = getDailyAcnhResults(apiCallResponse.data);
        setAllSeaCreatures(dailySeaCreaturesResults);
        setSeaCreatures(sortDescendingOrder(dailySeaCreaturesResults, 'price'));
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
      setSeaCreatures(sortDescendingOrder(seaCreatures, 'price'));
      setSortType(event.target.value);
    } else if (event.target.value === 'Lowest price') {
      setSeaCreatures(sortAscendingOrder(seaCreatures, 'price'));
      setSortType(event.target.value);
    }
  };

  const handleSpeed = (event) => {
    if (event.target.value === 'All') {
      setSeaCreatures(() => {
        if (sortType === 'Highest price') {
          return sortDescendingOrder(allSeaCreatures, 'price');
        } else if (sortType === 'Lowest price') {
          return sortAscendingOrder(allSeaCreatures, 'price');
        }
      });
    } else {
      setSeaCreatures(() => {
        const filteredBySpeed = allSeaCreatures.filter(
          (seaCreature) => seaCreature.speed === event.target.value,
        );
        if (sortType === 'Highest price') {
          return sortDescendingOrder(filteredBySpeed, 'price');
        } else if (sortType === 'Lowest price') {
          return sortAscendingOrder(filteredBySpeed, 'price');
        }
      });
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
