import { useState, useEffect } from 'react';

import ItemCardsGrid from '../../components/ItemCardsGrid/ItemCardsGrid';
import DropdownButton from '../../components/DropdownButton/DropdownButton';
import TextBlock from '../../components/TextBlock/TextBlock';

import { sortAscendingOrder } from '../../utils';

import './sea-creatures-page.css';

import useSortByPrice from '../../hooks/useSortByPrice';
import useSortBySpeedType from '../../hooks/useSortBySpeedType';
import useSelectLanguage from '../../hooks/useSelectLanguage';
import useQuerySeaCreatures from '../../hooks/useQuerySeaCreatures';

const SeaCreaturesPage = () => {
  const [items, setItems] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState('name-EUen');
  const [types, setTypes] = useState([]);

  const { data, isLoading, isError } = useQuerySeaCreatures();
  const { handleSelectLanguage } = useSelectLanguage(setSelectedLanguage);
  const { handleSortByPrice, sortByPrice } = useSortByPrice(items, setItems);
  const { handleSortBySpeedType } = useSortBySpeedType(data?.dailyData, setItems, sortByPrice);

  useEffect(() => {
    setItems(sortAscendingOrder(data?.dailyData, 'price'));
    setTypes(() => {
      const speedTypes = new Set(data?.dailyData.map((obj) => obj.speed));
      return ['All', ...speedTypes];
    });
  }, [data]);

  if (isLoading) {
    return (
      <main className="page-container">
        ] <TextBlock className={'text-block'} text={'Loading...'} />
      </main>
    );
  }

  if (isError) {
    return (
      <main className="page-container">
        <TextBlock className={'text-block'} text={'Sorry...something went wrong'} />
      </main>
    );
  }

  return (
    <main className="page-container">
      <section className="sort">
        <DropdownButton
          label={'sort by'}
          onChange={handleSortByPrice}
          options={['Lowest price', 'Highest price']}
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
