import { useState, useEffect } from 'react';
import ItemCardsGrid from '../../components/ItemCardsGrid/ItemCardsGrid';
import DropdownButton from '../../components/DropdownButton/DropdownButton';
import { sortAscendingOrder, sortDescendingOrder } from '../../utils';

import './sea-creatures-page.css';
import useFetchData from '../../hooks/useFetchData';

const SeaCreaturesPage = () => {
  const [language, setLanguage] = useState('name-EUen');
  const [seaCreatures, setSeaCreatures] = useState([]);
  const [sortByPrice, setSortByPrice] = useState('Highest price');

  const { data, types } = useFetchData('https://acnhapi.com/v1/sea/', 'speed');

  useEffect(() => {
    setSeaCreatures(sortDescendingOrder(data, 'price'));
  }, [data]);

  const handleSort = (event) => {
    if (event.target.value === 'Highest price') {
      setSeaCreatures(sortDescendingOrder(seaCreatures, 'price'));
      setSortByPrice(event.target.value);
    } else if (event.target.value === 'Lowest price') {
      setSeaCreatures(sortAscendingOrder(seaCreatures, 'price'));
      setSortByPrice(event.target.value);
    }
  };

  const handleSpeed = (event) => {
    if (event.target.value === 'All') {
      setSeaCreatures(() => {
        if (sortByPrice === 'Highest price') {
          return sortDescendingOrder(data, 'price');
        } else if (sortByPrice === 'Lowest price') {
          return sortAscendingOrder(data, 'price');
        }
      });
    } else {
      setSeaCreatures(() => {
        const filteredBySpeed = data.filter(
          (seaCreature) => seaCreature.speed === event.target.value,
        );
        if (sortByPrice === 'Highest price') {
          return sortDescendingOrder(filteredBySpeed, 'price');
        } else if (sortByPrice === 'Lowest price') {
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
        <DropdownButton label={'speed'} onChange={handleSpeed} options={types} />
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
