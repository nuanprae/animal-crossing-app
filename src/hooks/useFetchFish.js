import axios from 'axios';
import { useQuery } from 'react-query';
import { getDailyAcnhResults } from '../utils';

const useFetchFish = () => {
  const { data, isLoading, isError } = useQuery('fish', async () => {
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
    isLoading,
    isError,
    data: data?.data,
  };
};

export default useFetchFish;
