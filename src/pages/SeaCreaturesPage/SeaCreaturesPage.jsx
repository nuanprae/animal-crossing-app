import { useState, useEffect } from 'react';
import ItemCardsGrid from '../../components/ItemCardsGrid/ItemCardsGrid';
import DropdownButton from '../../components/DropdownButton/DropdownButton';
import { sortDescendingOrder } from '../../utils';

import './sea-creatures-page.css';
import useFetchData from '../../hooks/useFetchData';
import useSortByPrice from '../../hooks/useSortByPrice';
import useSortBySpeedType from '../../hooks/useSortBySpeedType';
import useSelectLanguage from '../../hooks/useSelectLanguage';

const SeaCreaturesPage = () => {
  const [items, setItems] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState('name-EUen');
  const [types, setTypes] = useState([]);

  const { dailyData, isLoading, isError } = useFetchData('https://acnhapi.com/v1/sea/');
  const { handleSelectLanguage } = useSelectLanguage(setSelectedLanguage);
  const { handleSortByPrice, sortByPrice } = useSortByPrice(items, setItems);
  const { handleSortBySpeedType } = useSortBySpeedType(dailyData, setItems, sortByPrice);

  useEffect(() => {
    setItems(sortDescendingOrder(dailyData, 'price'));
    setTypes(() => {
      const speedTypes = new Set(dailyData.map((obj) => obj.speed));
      return ['All', ...speedTypes];
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
        <DropdownButton label={'speed'} onChange={handleSortBySpeedType} options={types} />
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

export default SeaCreaturesPage;
