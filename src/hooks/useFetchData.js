import { useState, useEffect } from 'react';
import axios from 'axios';
import { getDailyAcnhResults } from '../utils';

const useFetchData = (apiEndPoint) => {
  const [completeData, setCompleteData] = useState({});
  const [dailyData, setDailyData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(null);

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
        setHasError(error);
      }
    };
    fetchData();
  }, [apiEndPoint]);

  return {
    completeData: completeData,
    dailyData: dailyData,
    isLoading: isLoading,
    hasError: hasError,
  };
};

export default useFetchData;
