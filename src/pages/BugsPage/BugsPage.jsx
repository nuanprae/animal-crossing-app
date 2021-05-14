import { useState, useEffect } from 'react';

import ItemCardsGrid from '../../components/ItemCardsGrid/ItemCardsGrid';
import DropdownButton from '../../components/DropdownButton/DropdownButton';

import { sortDescendingOrder } from '../../utils';

import './bugs-page.css';

import useFetchData from '../../hooks/useFetchData';
import useSortByPrice from '../../hooks/useSortByPrice';
import useSortByType from '../../hooks/useSortByType';
import useSelectLanguage from '../../hooks/useSelectLanguage';

const BugsPage = () => {
  const [items, setItems] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState('name-EUen');
  const [types, setTypes] = useState([]);

  const { dailyData, isLoading, isError } = useFetchData('https://acnhapi.com/v1/bugs/', 'rarity');
  const { handleSelectLanguage } = useSelectLanguage(setSelectedLanguage);
  const { handleSortByPrice, sortByPrice } = useSortByPrice(items, setItems);
  const { handleSortByType } = useSortByType(dailyData, setItems, sortByPrice, 'rarity');

  useEffect(() => {
    setItems(sortDescendingOrder(dailyData, 'price'));
    setTypes(() => {
      const rarityTypes = new Set(dailyData?.map((obj) => obj.availability.rarity));
      return ['All', ...rarityTypes];
    });
  }, [dailyData]);

  if (isLoading) {
    return <h2>Loading data...please wait</h2>;
  }

  if (isError) {
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
        <DropdownButton label={'rarity'} onChange={handleSortByType} options={types} />
        <DropdownButton
          label={'languages'}
          onChange={handleSelectLanguage}
          options={['English', 'Japanese']}
        />
      </section>
      <ItemCardsGrid items={items} language={selectedLanguage} />
    </main>
  );
};

export default BugsPage;
