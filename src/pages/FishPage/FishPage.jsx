import { useState, useEffect } from 'react';

import FilterMenu from '../../components/FilterMenu/FilterMenu';
import ItemCardsGrid from '../../components/ItemCardsGrid/ItemCardsGrid';
import Loading from '../../components/Loading/Loading';
import TextBlock from '../../components/TextBlock/TextBlock';

import { sortAscendingOrder } from '../../utils';

import './fish-page.css';

import useSortByPrice from '../../hooks/useSortByPrice';
import useSortByType from '../../hooks/useSortByType';
import useSelectLanguage from '../../hooks/useSelectLanguage';
import useQueryCritters from '../../hooks/useQueryCritters';

const FishPage = () => {
  const [items, setItems] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState('name-EUen');
  const [types, setTypes] = useState([]);

  const { data, isLoading, isError } = useQueryCritters('https://acnhapi.com/v1/fish/', 'fish');
  const { handleSortByPrice, sortByPrice } = useSortByPrice(items, setItems);
  const { handleSortByType } = useSortByType(data, setItems, sortByPrice, 'location');
  const { handleSelectLanguage } = useSelectLanguage(setSelectedLanguage);

  useEffect(() => {
    setItems(sortAscendingOrder(data, 'price'));
    setTypes(() => {
      const locationTypes = new Set(data?.map((obj) => obj.availability.location));
      return ['All', ...locationTypes];
    });
  }, [data]);

  if (isLoading) {
    return <Loading />;
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
        sortByPrice={handleSortByPrice}
        sortByType={handleSortByType}
        selectLanguage={handleSelectLanguage}
        optgroup="Location"
        types={types}
      />
      <ItemCardsGrid items={items} language={selectedLanguage} linkPath="fish" />
    </main>
  );
};

export default FishPage;
