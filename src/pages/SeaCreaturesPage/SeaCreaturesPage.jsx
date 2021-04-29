import { useState, useEffect } from 'react';
import ItemCardsGrid from '../../components/ItemCardsGrid/ItemCardsGrid';
import DropdownButton from '../../components/DropdownButton/DropdownButton';

import './sea-creatures-page.css';
import useFetchData from '../../hooks/useFetchData';

const SeaCreaturesPage = () => {
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
  } = useFetchData('https://acnhapi.com/v1/sea/');

  useEffect(() => {
    setTypes(() => {
      const speedTypes = new Set(data.map((obj) => obj.speed));
      return ['All', ...speedTypes];
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
        <DropdownButton label={'speed'} onChange={handleSortByType} options={types} />
        <DropdownButton
          label={'languages'}
          onChange={handleSelectLanguage}
          options={['name-EUen', 'name-JPja']}
        />
      </section>
      <ItemCardsGrid data={items} language={selectedLanguage} />
    </main>
  );
};

export default SeaCreaturesPage;
