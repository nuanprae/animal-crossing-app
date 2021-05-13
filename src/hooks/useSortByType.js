import { sortAscendingOrder, sortDescendingOrder } from '../utils';

const useSortByType = (state, setState, sortByPrice, type) => {
  const handleSortByType = (event) => {
    if (event.target.value === 'All') {
      setState(() => {
        if (sortByPrice === 'Highest price') {
          return sortDescendingOrder(state, 'price');
        } else if (sortByPrice === 'Lowest price') {
          return sortAscendingOrder(state, 'price');
        }
      });
    } else {
      setState(() => {
        const filtered = state?.filter((obj) => obj.availability[type] === event.target.value);
        if (sortByPrice === 'Highest price') {
          return sortDescendingOrder(filtered, 'price');
        } else if (sortByPrice === 'Lowest price') {
          return sortAscendingOrder(filtered, 'price');
        }
      });
    }
  };
  return { handleSortByType };
};

export default useSortByType;
