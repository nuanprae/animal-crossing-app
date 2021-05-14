import axios from 'axios';
import { useQuery } from 'react-query';

import { getDailyAcnhResults } from '../utils';

const useQueryFish = () => {
  const { data, isError, isLoading } = useQuery(
    'fish',
    async () => {
      const apiCallResponse = await axios.get('https://acnhapi.com/v1/fish/');
      const manipulatedData = {
        ...apiCallResponse,
        data: {
          completeData: apiCallResponse.data,
          dailyData: getDailyAcnhResults(apiCallResponse.data),
        },
      };
      return manipulatedData;
    },
    { refetchOnMount: false, refetchOnWindowFocus: false },
  );
  return {
    data: data?.data,
    isError: isError,
    isLoading: isLoading,
  };
};

export default useQueryFish;
