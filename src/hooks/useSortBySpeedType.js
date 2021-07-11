import { sortAscendingOrder, sortDescendingOrder } from '../utils';

const useSortBySpeedType = (data, setItems, sortByPrice) => {
  const handleSortBySpeedType = (event) => {
    if (event.target.value === 'All') {
      setItems(() => {
        if (sortByPrice === 'Highest price') {
          return sortDescendingOrder(data, 'price');
        } else if (sortByPrice === 'Lowest price') {
          return sortAscendingOrder(data, 'price');
        }
      });
    } else {
      setItems(() => {
        const filtered = data?.filter((obj) => obj.speed === event.target.value);

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
