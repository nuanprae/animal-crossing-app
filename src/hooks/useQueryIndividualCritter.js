import axios from 'axios';
import { useQuery } from 'react-query';
import { useParams } from 'react-router';

const useQueryIndividualCritter = (type) => {
  const { id } = useParams();
  const { isLoading, isError, data } = useQuery(
    `fish-${id}`,
    async () => {
      const apiCallResponse = await axios.get(`https://acnhapi.com/v1/${type}/${id}`);
      return apiCallResponse;
    },
    { refetchOnMount: false, refetchOnWindowFocus: false },
  );
  return {
    data: data?.data,
    isError: isError,
    isLoading: isLoading,
  };
};

export default useQueryIndividualCritter;
