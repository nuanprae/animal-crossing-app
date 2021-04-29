import { useState, useEffect } from 'react';
import ItemCardsGrid from '../../components/ItemCardsGrid/ItemCardsGrid';
import DropdownButton from '../../components/DropdownButton/DropdownButton';
import { sortAscendingOrder, sortDescendingOrder } from '../../utils';

import './fish-page.css';
import useFetchData from '../../hooks/useFetchData';

const FishPage = () => {
  const [language, setLanguage] = useState('name-EUen');
  const [fish, setFish] = useState([]);
  const [sortByPrice, setSortByPrice] = useState('Highest price');
  const [types, setTypes] = useState([]);

  const { data, isLoading, hasError } = useFetchData('https://acnhapi.com/v1/fish/');

  useEffect(() => {
    setFish(sortDescendingOrder(data, 'price'));
    setTypes(() => {
      const locationTypes = new Set(data.map((obj) => obj.availability.location));
      return ['All', ...locationTypes];
    });
  }, [data]);

  const handleSortByPrice = (event) => {
    if (event.target.value === 'Highest price') {
      setFish(sortDescendingOrder(fish, 'price'));
      setSortByPrice(event.target.value);
    } else if (event.target.value === 'Lowest price') {
      setFish(sortAscendingOrder(fish, 'price'));
      setSortByPrice(event.target.value);
    }
  };

  const handelSortByType = (event) => {
    if (event.target.value === 'All') {
      setFish(() => {
        if (sortByPrice === 'Highest price') {
          return sortDescendingOrder(data, 'price');
        } else if (sortByPrice === 'Lowest price') {
          return sortAscendingOrder(data, 'price');
        }
      });
    } else {
      setFish(() => {
        const filteredByLocation = data.filter(
          (fish) => fish.availability.location === event.target.value,
        );
        if (sortByPrice === 'Highest price') {
          return sortDescendingOrder(filteredByLocation, 'price');
        } else if (sortByPrice === 'Lowest price') {
          return sortAscendingOrder(filteredByLocation, 'price');
        }
      });
    }
  };

  const handleSelectLanguage = (event) => {
    setLanguage(event.target.value);
  };

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
        <DropdownButton label={'location'} onChange={handelSortByType} options={types} />
        <DropdownButton
          label={'languages'}
          onChange={handleSelectLanguage}
          options={['name-EUen', 'name-JPja']}
        />
      </section>
      <ItemCardsGrid data={fish} language={language} />
    </main>
  );
};

export default FishPage;
