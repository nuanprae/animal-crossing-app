import axios from 'axios';
import { useQuery } from 'react-query';

import { getDailyAcnhResults } from '../utils';

const useQueryCritters = (crittersType, apiEndPoint) => {
  const { data, isError, isLoading } = useQuery(
    crittersType,
    async () => {
      const apiCallResponse = await axios.get(apiEndPoint);
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

export default useQueryCritters;
