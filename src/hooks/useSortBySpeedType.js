import { sortAscendingOrder, sortDescendingOrder } from '../utils';

const useSortBySpeedType = (state, setState, sortByPrice) => {
  const handleSortBySpeedType = (event) => {
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
        const filtered = state.filter((obj) => obj.speed === event.target.value);

        if (sortByPrice === 'Highest price') {
          return sortDescendingOrder(filtered, 'price');
        } else if (sortByPrice === 'Lowest price') {
          return sortAscendingOrder(filtered, 'price');
        }
      });
    }
  };

  return { handleSortBySpeedType };
};

export default useSortBySpeedType;
