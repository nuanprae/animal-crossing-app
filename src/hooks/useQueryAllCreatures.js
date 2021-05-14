import useQueryFish from './useQueryFish';
import useQuerySeaCreatures from './useQuerySeaCreatures';
import useQueryBugs from './useQueryBugs';

const useQueryAllCreatures = () => {
  const fishData = useQueryFish();
  const seaCreaturesData = useQuerySeaCreatures();
  const bugsData = useQueryBugs();

  return {
    fishData,
    bugsData,
    seaCreaturesData,
  };
};

export default useQueryAllCreatures;
