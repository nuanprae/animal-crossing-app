import { useState, useEffect } from 'react';
import axios from 'axios';
import { getDailyAcnhResults } from '../utils';

const useFetchData = (apiEndPoint) => {
  const [completeData, setCompleteData] = useState({});
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiCallResponse = await axios.get(apiEndPoint);
        const dailyResults = getDailyAcnhResults(apiCallResponse.data);
        setCompleteData(apiCallResponse.data);
        setData(dailyResults);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setHasError(error);
      }
    };
    fetchData();
  }, [apiEndPoint]);

  const fetchedDataState = {
    completeData: completeData,
    data: data,
    isLoading: isLoading,
    hasError: hasError,
  };

  return fetchedDataState;
};

export default useFetchData;
