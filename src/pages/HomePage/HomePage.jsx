import { useState, useEffect } from 'react';

import TextBlock from '../../components/TextBlock/TextBlock';
import ItemCard from '../../components/ItemCard/ItemCard';

import { findTotalCreatures } from '../../utils';

import './home-page.css';

import useQueryAllCreatures from '../../hooks/useQueryAllCreatures';

const HomePage = (props) => {
  const [fishIcon, setFishIcon] = useState('');
  const [numberOfFishAvailable, setNumberOfFishAvailable] = useState(0);
  const [totalFish, setTotalFish] = useState(0);

  const [seaCreatureIcon, setSeaCreatureIcon] = useState('');
  const [numberOfSeaCreaturesAvailable, setNumberOfSeaCreaturesAvailable] = useState(0);
  const [totalSeaCreatures, setTotalSeaCreatures] = useState(0);

  const [bugIcon, setBugIcon] = useState('');
  const [numberOfBugsAvailable, setNumberOfBugsAvailable] = useState(0);
  const [totalBugs, setTotalBugs] = useState(0);

  const { fishData, seaCreaturesData, bugsData } = useQueryAllCreatures();

  useEffect(() => {
    setFishIcon(fishData.data?.dailyData[0].icon_uri);
    setNumberOfFishAvailable(fishData.data?.dailyData.length);
    setTotalFish(findTotalCreatures(fishData.data?.completeData));

    setSeaCreatureIcon(seaCreaturesData.data?.dailyData[0].icon_uri);
    setNumberOfSeaCreaturesAvailable(seaCreaturesData.data?.dailyData.length);
    setTotalSeaCreatures(findTotalCreatures(seaCreaturesData.data?.completeData));

    setBugIcon(bugsData.data?.dailyData[0].icon_uri);
    setNumberOfBugsAvailable(bugsData.data?.dailyData.length);
    setTotalBugs(findTotalCreatures(bugsData.data?.completeData));
  }, [fishData, seaCreaturesData, bugsData]);

  if (fishData.isLoading || seaCreaturesData.isLoading || bugsData.isLoading) {
    return (
      <main className={`home-page ${props.className}`}>
        <TextBlock className={'text-block'} text={'Loading...'} />
      </main>
    );
  }

  if (fishData.isError || seaCreaturesData.isError || bugsData.isError) {
    return (
      <main className={`home-page ${props.className}`}>
        <TextBlock className={'text-block'} text={'Sorry...something went wrong'} />
      </main>
    );
  }

  return (
    <main className={`home-page ${props.className}`}>
      <TextBlock className={'text-block'} text={'Available Today'} />
      <section className={'item-cards'}>
        <ItemCard
          caption1={'fish'}
          caption2={`${numberOfFishAvailable} out of ${totalFish}`}
          image={fishIcon}
        />
        <ItemCard
          caption1={'sea creatures'}
          caption2={`${numberOfSeaCreaturesAvailable} out of ${totalSeaCreatures}`}
          image={seaCreatureIcon}
        />
        <ItemCard
          caption1={'bugs'}
          caption2={`${numberOfBugsAvailable} out of ${totalBugs}`}
          image={bugIcon}
        />
      </section>
    </main>
  );
};

export default HomePage;
