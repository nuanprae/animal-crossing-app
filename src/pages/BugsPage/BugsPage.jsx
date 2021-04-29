import { useState, useEffect } from 'react';
import ItemCardsGrid from '../../components/ItemCardsGrid/ItemCardsGrid';
import DropdownButton from '../../components/DropdownButton/DropdownButton';
import { sortAscendingOrder, sortDescendingOrder } from '../../utils';

import './bugs-page.css';
import useFetchData from '../../hooks/useFetchData';

const BugsPage = () => {
  const [language, setLanguage] = useState('name-EUen');
  const [bugs, setBugs] = useState([]);
  const [sortByPrice, setSortByPrice] = useState('Highest price');
  const [types, setTypes] = useState([]);

  const { data, isLoading, hasError } = useFetchData('https://acnhapi.com/v1/bugs/');

  useEffect(() => {
    setBugs(sortDescendingOrder(data, 'price'));
    setTypes(() => {
      const rarityTypes = new Set(data.map((obj) => obj.availability.rarity));
      return ['All', ...rarityTypes];
    });
  }, [data]);

  const handleSortByPrice = (event) => {
    if (event.target.value === 'Highest price') {
      setBugs(sortDescendingOrder(bugs, 'price'));
      setSortByPrice(event.target.value);
    } else if (event.target.value === 'Lowest price') {
      setBugs(sortAscendingOrder(bugs, 'price'));
      setSortByPrice(event.target.value);
    }
  };

  const handleSortByType = (event) => {
    if (event.target.value === 'All') {
      setBugs(() => {
        if (sortByPrice === 'Highest price') {
          return sortDescendingOrder(data, 'price');
        } else if (sortByPrice === 'Lowest price') {
          return sortAscendingOrder(data, 'price');
        }
      });
    } else {
      setBugs(() => {
        const filteredByRarity = data.filter(
          (bug) => bug.availability.rarity === event.target.value,
        );
        if (sortByPrice === 'Highest price') {
          return sortDescendingOrder(filteredByRarity, 'price');
        } else if (sortByPrice === 'Lowest price') {
          return sortAscendingOrder(filteredByRarity, 'price');
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
        <DropdownButton label={'rarity'} onChange={handleSortByType} options={types} />
        <DropdownButton
          label={'languages'}
          onChange={handleSelectLanguage}
          options={['name-EUen', 'name-JPja']}
        />
      </section>
      <ItemCardsGrid data={bugs} language={language} />
    </main>
  );
};

export default BugsPage;
