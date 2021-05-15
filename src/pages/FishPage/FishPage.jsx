import { useState, useEffect } from 'react';

import FilterMenu from '../../components/FilterMenu/FilterMenu';
import ItemCardsGrid from '../../components/ItemCardsGrid/ItemCardsGrid';
import TextBlock from '../../components/TextBlock/TextBlock';

import { sortAscendingOrder } from '../../utils';

import './fish-page.css';

import useSortByPrice from '../../hooks/useSortByPrice';
import useSortByType from '../../hooks/useSortByType';
import useSelectLanguage from '../../hooks/useSelectLanguage';
import useQueryFish from '../../hooks/useQueryFish';

const FishPage = () => {
  const [items, setItems] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState('name-EUen');
  const [types, setTypes] = useState([]);

  const { data, isLoading, isError } = useQueryFish();
  const { handleSortByPrice, sortByPrice } = useSortByPrice(items, setItems);
  const { handleSortByType } = useSortByType(data?.dailyData, setItems, sortByPrice, 'location');
  const { handleSelectLanguage } = useSelectLanguage(setSelectedLanguage);

  useEffect(() => {
    setItems(sortAscendingOrder(data?.dailyData, 'price'));
    setTypes(() => {
      const locationTypes = new Set(data?.dailyData.map((obj) => obj.availability.location));
      return ['All', ...locationTypes];
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
      <FilterMenu
        category={'Location'}
        sortByPrice={handleSortByPrice}
        sortByType={handleSortByType}
        selectLanguage={handleSelectLanguage}
        types={types}
      />
      <ItemCardsGrid items={items} language={selectedLanguage} />
    </main>
  );
};

export default FishPage;
