import useFetchData from '../hooks/useFetchData';

const useFetchAllCreatures = () => {
  //Promise.all?
  const fishData = useFetchData('https://acnhapi.com/v1/fish/');
  const seaCreaturesData = useFetchData('https://acnhapi.com/v1/sea/');
  const bugsData = useFetchData('https://acnhapi.com/v1/bugs/');

  return {
    fishData,
    seaCreaturesData,
    bugsData,
  };
};

export default useFetchAllCreatures;
