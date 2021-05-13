import axios from 'axios';
import { useQuery } from 'react-query';

import { getDailyAcnhResults } from '../utils';

const useFetchFish = () => {
  const { data, isError, isLoading } = useQuery('fish', async () => {
    const apiCallResponse = await axios.get('https://acnhapi.com/v1/fish/');
    const manipulatedData = {
      ...apiCallResponse,
      data: {
        completeData: apiCallResponse.data,
        dailyData: getDailyAcnhResults(apiCallResponse.data),
      },
    };
    return manipulatedData;
  });
  return {
    data: data?.data,
    isError,
    isLoading,
  };
};

export default useFetchFish;
