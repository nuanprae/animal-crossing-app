import axios from 'axios';
import { useQuery } from 'react-query';

import { getDailyAcnhResults } from '../utils';

const useQuerySeaCreatures = () => {
  const { data, isError, isLoading } = useQuery(
    'sea creatures',
    async () => {
      const apiCallResponse = await axios.get('https://acnhapi.com/v1/sea/');
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
    isError,
    isLoading,
  };
};

export default useQuerySeaCreatures;
