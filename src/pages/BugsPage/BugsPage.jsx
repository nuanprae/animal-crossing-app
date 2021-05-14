import { useState, useEffect } from 'react';

import ItemCardsGrid from '../../components/ItemCardsGrid/ItemCardsGrid';
import DropdownButton from '../../components/DropdownButton/DropdownButton';
import TextBlock from '../../components/TextBlock/TextBlock';

import { sortAscendingOrder } from '../../utils';

import './bugs-page.css';

import useSortByPrice from '../../hooks/useSortByPrice';
import useSortByType from '../../hooks/useSortByType';
import useSelectLanguage from '../../hooks/useSelectLanguage';
import useQueryBugs from '../../hooks/useQueryBugs';

const BugsPage = () => {
  const [items, setItems] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState('name-EUen');
  const [types, setTypes] = useState([]);

  const { data, isLoading, isError } = useQueryBugs();
  const { handleSelectLanguage } = useSelectLanguage(setSelectedLanguage);
  const { handleSortByPrice, sortByPrice } = useSortByPrice(items, setItems);
  const { handleSortByType } = useSortByType(data?.dailyData, setItems, sortByPrice, 'rarity');

  useEffect(() => {
    setItems(sortAscendingOrder(data?.dailyData, 'price'));
    setTypes(() => {
      const rarityTypes = new Set(data?.dailyData.map((obj) => obj.availability.rarity));
      return ['All', ...rarityTypes];
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
