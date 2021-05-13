import axios from 'axios';
import { useState, useEffect } from 'react';

import { getDailyAcnhResults } from '../utils';

const useFetchData = (apiEndPoint) => {
  const [completeData, setCompleteData] = useState({});
  const [dailyData, setDailyData] = useState([]);
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiCallResponse = await axios.get(apiEndPoint);
        const dailyResults = getDailyAcnhResults(apiCallResponse.data);
        setCompleteData(apiCallResponse.data);
        setDailyData(dailyResults);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setIsError(error);
      }
    };
    fetchData();
  }, [apiEndPoint]);

  return {
    completeData: completeData,
    dailyData: dailyData,
    isError: isError,
    isLoading: isLoading,
  };
};

export default useFetchData;
