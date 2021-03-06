import { useState, useEffect } from 'react';

import FilterMenu from '../../components/FilterMenu/FilterMenu';
import ItemCardsGrid from '../../components/ItemCardsGrid/ItemCardsGrid';
import TextBlock from '../../components/TextBlock/TextBlock';

import { sortAscendingOrder } from '../../utils';

import './bugs-page.css';

import useSortByPrice from '../../hooks/useSortByPrice';
import useSortByType from '../../hooks/useSortByType';
import useSelectLanguage from '../../hooks/useSelectLanguage';
import useQueryCritters from '../../hooks/useQueryCritters';

const BugsPage = () => {
  const [items, setItems] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState('name-EUen');
  const [types, setTypes] = useState(null);

  const { data, isLoading, isError } = useQueryCritters('https://acnhapi.com/v1/bugs/', 'bugs');
  const { handleSelectLanguage } = useSelectLanguage(setSelectedLanguage);
  const { handleSortByPrice, sortByPrice } = useSortByPrice(items, setItems);
  const { handleSortByType } = useSortByType(data, setItems, sortByPrice, 'rarity');

  useEffect(() => {
    setItems(sortAscendingOrder(data, 'price'));
    setTypes(() => {
      const rarityTypes = new Set(data?.map((obj) => obj.availability.rarity));
      return ['All', ...rarityTypes];
    });
  }, [data]);

  if (isLoading) {
    return (
      <main className="page-container">
        <TextBlock text="Loading..." />
      </main>
    );
  }

  if (isError) {
    return (
      <main className="page-container">
        <TextBlock text="Sorry...something went wrong" />
      </main>
    );
  }

  return (
    <main className="page-container">
      <FilterMenu
        handleSortByPrice={handleSortByPrice}
        handleSortByType={handleSortByType}
        handleSelectLanguage={handleSelectLanguage}
        optgroup="Rarity"
        types={types}
      />
      <ItemCardsGrid items={items} language={selectedLanguage} linkPath="bugs" />
    </main>
  );
};

export default BugsPage;
