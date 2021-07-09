import { useState } from 'react';

import { sortAscendingOrder, sortDescendingOrder } from '../utils';

const useSortByPrice = (items, setItems) => {
  const [sortByPrice, setSortByPrice] = useState('Lowest price');

  const handleSortByPrice = (event) => {
    if (event.target.value === 'Highest price') {
      setItems(sortDescendingOrder(items, 'price'));
      setSortByPrice(event.target.value);
    } else if (event.target.value === 'Lowest price') {
      setItems(sortAscendingOrder(items, 'price'));
      setSortByPrice(event.target.value);
    }
  };

  return { handleSortByPrice, sortByPrice };
};

export default useSortByPrice;
