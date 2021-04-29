import { useState, useEffect } from 'react';
import ItemCardsGrid from '../../components/ItemCardsGrid/ItemCardsGrid';
import DropdownButton from '../../components/DropdownButton/DropdownButton';

import './fish-page.css';
import useFetchData from '../../hooks/useFetchData';

const FishPage = () => {
  const [types, setTypes] = useState([]);

  const {
    data,
    isLoading,
    hasError,
    items,
    selectedLanguage,
    handleSortByPrice,
    handleSortByType,
    handleSelectLanguage,
  } = useFetchData('https://acnhapi.com/v1/fish/', 'availability', 'location');

  useEffect(() => {
    setTypes(() => {
      const locationTypes = new Set(data.map((obj) => obj.availability.location));
      return ['All', ...locationTypes];
    });
  }, [data]);

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
        <DropdownButton label={'location'} onChange={handleSortByType} options={types} />
        <DropdownButton
          label={'languages'}
          onChange={handleSelectLanguage}
          options={['name-EUen', 'name-JPja']}
        />
      </section>
      <ItemCardsGrid items={items} language={selectedLanguage} />
    </main>
  );
};

export default FishPage;
