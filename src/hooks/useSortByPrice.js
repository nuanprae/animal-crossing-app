import { useState } from 'react';

import { sortAscendingOrder, sortDescendingOrder } from '../utils';

const useSortByPrice = (state, setState) => {
  const [sortByPrice, setSortByPrice] = useState('Lowest price');

  const handleSortByPrice = (event) => {
    if (event.target.value === 'Highest price') {
      setState(sortDescendingOrder(state, 'price'));
      setSortByPrice(event.target.value);
    } else if (event.target.value === 'Lowest price') {
      setState(sortAscendingOrder(state, 'price'));
      setSortByPrice(event.target.value);
    }
  };

  return { handleSortByPrice, sortByPrice };
};

export default useSortByPrice;
