import { useState, useEffect } from 'react';

import ItemCardsGrid from '../../components/ItemCardsGrid/ItemCardsGrid';
import DropdownButton from '../../components/DropdownButton/DropdownButton';

import { sortDescendingOrder } from '../../utils';

import './fish-page.css';

import useFetchData from '../../hooks/useFetchData';
import useSortByPrice from '../../hooks/useSortByPrice';
import useSortByType from '../../hooks/useSortByType';
import useSelectLanguage from '../../hooks/useSelectLanguage';
import useFetchFish from '../../hooks/useFetchFish';

const FishPage = () => {
  const { data, isLoading, isError } = useFetchFish();
  // console.log(data?.dailyData);
  // return (
  //   <main className="page-container">
  //     <ItemCardsGrid items={data?.dailyData} />
  //   </main>
  // );
  const [items, setItems] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState('name-EUen');
  const [types, setTypes] = useState([]);

  // const { dailyData, isLoading, hasError } = useFetchData('https://acnhapi.com/v1/fish/');
  const { handleSortByPrice, sortByPrice } = useSortByPrice(items, setItems);
  const { handleSortByType } = useSortByType(data?.dailyData, setItems, sortByPrice, 'location');
  const { handleSelectLanguage } = useSelectLanguage(setSelectedLanguage);

  useEffect(() => {
    setItems(sortDescendingOrder(data?.dailyData, 'price'));
    setTypes(() => {
      const locationTypes = new Set(data?.dailyData.map((obj) => obj.availability.location));
      return ['All', ...locationTypes];
    });
  }, [data]);

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
        <DropdownButton label={'location'} onChange={handleSortByType} options={types} />
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

export default FishPage;
