import { useEffect, useState } from 'react';
import axios from 'axios';
import { getDailyAcnhResults } from '../utils';

const useFetchAllCreatures = () => {
  const [completeFishData, setCompleteFishData] = useState([]);
  const [dailyFishData, setDailyFishData] = useState([]);

  const [completeSeaCreaturesData, setCompleteSeaCreaturesData] = useState([]);
  const [dailySeaCreaturesData, setDailySeaCreaturesData] = useState([]);

  const [completeBugsData, setCompleteBugsData] = useState([]);
  const [dailyBugsData, setDailyBugsData] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(null);

  useEffect(() => {
    const fetchFishData = async () => {
      try {
        const apiCallResponse = await axios.get('https://acnhapi.com/v1/fish/');
        const dailyResults = getDailyAcnhResults(apiCallResponse.data);
        setCompleteFishData(apiCallResponse.data);
        setDailyFishData(dailyResults);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setHasError(error);
      }
    };

    const fetchSeaCreaturesData = async () => {
      try {
        const apiCallResponse = await axios.get('https://acnhapi.com/v1/sea/');
        const dailyResults = getDailyAcnhResults(apiCallResponse.data);
        setCompleteSeaCreaturesData(apiCallResponse.data);
        setDailySeaCreaturesData(dailyResults);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setHasError(error);
      }
    };

    const fetchBugsData = async () => {
      try {
        const apiCallResponse = await axios.get('https://acnhapi.com/v1/bugs/');
        const dailyResults = getDailyAcnhResults(apiCallResponse.data);
        setCompleteBugsData(apiCallResponse.data);
        setDailyBugsData(dailyResults);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setHasError(error);
      }
    };
    fetchFishData();
    fetchSeaCreaturesData();
    fetchBugsData();
  }, []);

  return {
    completeFishData,
    dailyFishData,
    completeSeaCreaturesData,
    dailySeaCreaturesData,
    completeBugsData,
    dailyBugsData,
    isLoading,
    hasError,
  };
};

export default useFetchAllCreatures;
