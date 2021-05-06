import { useState, useEffect } from 'react';
import TextBlock from '../../components/TextBlock/TextBlock';
import ItemCard from '../../components/ItemCard/ItemCard';

import './home-page.css';
import useFetchAllCreatures from '../../hooks/useFetchAllCreatures';

const HomePage = (props) => {
  const {
    completeFishData,
    completeSeaCreaturesData,
    completeBugsData,
    dailyFishData,
    dailySeaCreaturesData,
    dailyBugsData,
    isLoading,
    hasError,
  } = useFetchAllCreatures();

  const [fishIcon, setFishIcon] = useState('');
  const [numberOfFishAvailable, setNumberOfFishAvailable] = useState(0);
  const [totalFish, setTotalFish] = useState(0);

  const [seaCreatureIcon, setSeaCreatureIcon] = useState('');
  const [numberOfSeaCreaturesAvailable, setNumberOfSeaCreaturesAvailable] = useState(0);
  const [totalSeaCreatures, setTotalSeaCreatures] = useState(0);

  const [bugIcon, setBugIcon] = useState('');
  const [numberOfBugsAvailable, setNumberOfBugsAvailable] = useState(0);
  const [totalBugs, setTotalBugs] = useState(0);

  useEffect(() => {
    setFishIcon(dailyFishData[0]?.icon_uri);
    setNumberOfFishAvailable(dailyFishData?.length);
    setTotalFish(Object.values(completeFishData)?.length);

    setSeaCreatureIcon(dailySeaCreaturesData[0]?.icon_uri);
    setNumberOfSeaCreaturesAvailable(dailySeaCreaturesData?.length);
    setTotalSeaCreatures(Object.values(completeSeaCreaturesData)?.length);

    setBugIcon(dailyBugsData[0]?.icon_uri);
    setNumberOfBugsAvailable(dailyBugsData?.length);
    setTotalBugs(Object.values(completeBugsData)?.length);
  }, [
    completeFishData,
    dailyFishData,
    completeSeaCreaturesData,
    dailySeaCreaturesData,
    completeBugsData,
    dailyBugsData,
  ]);

  if (isLoading) {
    return <h2>Loading data...please wait</h2>;
  }

  if (hasError) {
    return <h2>Sorry, something went wrong...</h2>;
  }

  return (
    <main className={`home-page ${props.className}`}>
      <TextBlock className={'text-block'} text={'Available Today'} />
      <section className={'item-cards'}>
        <ItemCard
          image={fishIcon}
          caption1={'fish'}
          caption2={`${numberOfFishAvailable} out of ${totalFish}`}
        />
        <ItemCard
          image={seaCreatureIcon}
          caption1={'sea creatures'}
          caption2={`${numberOfSeaCreaturesAvailable} out of ${totalSeaCreatures}`}
        />
        <ItemCard
          image={bugIcon}
          caption1={'bugs'}
          caption2={`${numberOfBugsAvailable} out of ${totalBugs}`}
        />
      </section>
    </main>
  );
};

export default HomePage;
