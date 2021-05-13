import useFetchData from '../hooks/useFetchData';

const useFetchAllCreatures = () => {
  //Promise.all?
  const fishData = useFetchData('https://acnhapi.com/v1/fish/');
  const bugsData = useFetchData('https://acnhapi.com/v1/bugs/');
  const seaCreaturesData = useFetchData('https://acnhapi.com/v1/sea/');

  return {
    fishData,
    bugsData,
    seaCreaturesData,
  };
};

export default useFetchAllCreatures;
