import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetchAudio = () => {
  const [audioList, setAudioList] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiCallResponse = await axios.get('https://acnhapi.com/v1/backgroundmusic/');
        setAudioList(Object.values(apiCallResponse.data));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return {
    audioList,
  };
};

export default useFetchAudio;
