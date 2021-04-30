import { useState, useEffect } from 'react';
import axios from 'axios';
import { getDailyAcnhResults, sortAscendingOrder, sortDescendingOrder } from '../utils';

const useFetchData = (apiEndPoint, propertyToFilter, nestedPropertyToFilter) => {
  const [data, setData] = useState([]);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(null);
  const [sortByPrice, setSortByPrice] = useState('Highest price');
  const [selectedLanguage, setSelectedLanguage] = useState('name-EUen');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiCallResponse = await axios.get(apiEndPoint);
        const dailyResults = getDailyAcnhResults(apiCallResponse.data);
        setData(dailyResults);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setHasError(error);
      }
    };
    fetchData();
  }, [apiEndPoint]);

  useEffect(() => {
    setItems(sortDescendingOrder(data, 'price'));
  }, [data]);

  const handleSortByPrice = (event) => {
    if (event.target.value === 'Highest price') {
      setItems(sortDescendingOrder(items, 'price'));
      setSortByPrice(event.target.value);
    } else if (event.target.value === 'Lowest price') {
      setItems(sortAscendingOrder(items, 'price'));
      setSortByPrice(event.target.value);
    }
  };

  const handleSortByType = (event) => {
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
        const filtered = data.filter(
          (obj) => obj[propertyToFilter]?.[nestedPropertyToFilter] === event.target.value,
        );
        if (sortByPrice === 'Highest price') {
          return sortDescendingOrder(filtered, 'price');
        } else if (sortByPrice === 'Lowest price') {
          return sortAscendingOrder(filtered, 'price');
        }
      });
    }
  };
  const handleSelectLanguage = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const fetchedDataState = {
    data: data,
    isLoading: isLoading,
    hasError: hasError,
    items: items,
    selectedLanguage: selectedLanguage,
    handleSortByPrice: handleSortByPrice,
    handleSortByType: handleSortByType,
    handleSelectLanguage: handleSelectLanguage,
  };

  return fetchedDataState;
};

export default useFetchData;
