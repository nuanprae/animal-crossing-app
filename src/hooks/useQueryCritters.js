import axios from 'axios';
import { useQuery } from 'react-query';

import { getDailyAcnhResults } from '../utils';

const useQueryCritters = (apiEndPoint, crittersType) => {
  const { data, isError, isLoading } = useQuery(
    crittersType,
    async () => {
      const apiCallResponse = await axios.get(apiEndPoint);
      const dailyData = getDailyAcnhResults(apiCallResponse.data);
      return dailyData;
    },
    { refetchOnMount: false, refetchOnWindowFocus: false },
  );
  return {
    data: data,
    isError: isError,
    isLoading: isLoading,
  };
};

export default useQueryCritters;
