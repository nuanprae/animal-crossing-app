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
  const [types, setTypes] = useState([]);

  const { data, isLoading, hasError } = useFetchData('https://acnhapi.com/v1/sea/');

  useEffect(() => {
    setSeaCreatures(sortDescendingOrder(data, 'price'));
    setTypes(() => {
      const speedTypes = new Set(data.map((obj) => obj.speed));
      return ['All', ...speedTypes];
    });
  }, [data]);

  const handleSortByPrice = (event) => {
    if (event.target.value === 'Highest price') {
      setSeaCreatures(sortDescendingOrder(seaCreatures, 'price'));
      setSortByPrice(event.target.value);
    } else if (event.target.value === 'Lowest price') {
      setSeaCreatures(sortAscendingOrder(seaCreatures, 'price'));
      setSortByPrice(event.target.value);
    }
  };

  const handleSortByType = (event) => {
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

  const handleSelectLanguage = (event) => {
    setLanguage(event.target.value);
  };

  if (isLoading) {
    return <h2>Loading data...please wait</h2>;
  }

  if (hasError) {
    return <h2>Sorry, something went wrong...</h2>;
  }

  return (
    <main className="page-container">
      <section className="sort">
        <DropdownButton
          label={'sort by'}
          onChange={handleSortByPrice}
          options={['Highest price', 'Lowest price']}
        />
        <DropdownButton label={'speed'} onChange={handleSortByType} options={types} />
        <DropdownButton
          label={'languages'}
          onChange={handleSelectLanguage}
          options={['name-EUen', 'name-JPja']}
        />
      </section>
      <ItemCardsGrid data={seaCreatures} language={language} />
    </main>
  );
};

export default SeaCreaturesPage;
