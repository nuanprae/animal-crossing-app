import axios from 'axios';
import { useQuery } from 'react-query';

import { getDailyAcnhResults } from '../utils';

const useQueryData = () => {
  const { data, isError, isLoading } = useQuery(
    'bugs',
    async () => {
      const apiCallResponse = await axios.get('https://acnhapi.com/v1/bugs/');
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

export default useQueryData;
