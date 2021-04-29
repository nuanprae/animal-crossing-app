import { useState, useEffect } from 'react';
import axios from 'axios';
import { getDailyAcnhResults } from '../utils';

const useFetchData = (apiEndPoint, type) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiCallResponse = await axios.get(apiEndPoint);
        const dailyResults = getDailyAcnhResults(apiCallResponse.data);
        setData(dailyResults);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [apiEndPoint, type]);

  const fetchedDataState = {
    data: data,
  };

  return fetchedDataState;
};

export default useFetchData;
