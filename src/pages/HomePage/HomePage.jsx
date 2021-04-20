import { useState, useEffect } from 'react';
import axios from 'axios';
import TextBlock from '../../components/TextBlock/TextBlock'
import ItemCard from '../../components/ItemCard/ItemCard'
import { getDailyAcnhResults } from '../../utils'

import './home-page.css'

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

  useEffect(() => {
    const fetchFishData = async () => {
      const apiCallResponse = await axios.get('https://acnhapi.com/v1/fish/');
      const dailyFishResults = getDailyAcnhResults(apiCallResponse.data);
      setFishIcon(dailyFishResults[0].icon_uri);
      setNumberOfFishAvailable(dailyFishResults.length);
      setTotalFish(Object.values(apiCallResponse.data).length)
    }
    const fetchSeaCreaturesData = async () => {
      const apiCallResponse = await axios.get('https://acnhapi.com/v1/sea/');
      const dailySeaCreaturesResults = getDailyAcnhResults(apiCallResponse.data);
      setSeaCreatureIcon(dailySeaCreaturesResults[0].icon_uri);
      setNumberOfSeaCreaturesAvailable(dailySeaCreaturesResults.length);
      setTotalSeaCreatures(Object.values(apiCallResponse.data).length)
    }
    const fetchBugsData = async () => {
      const apiCallResponse = await axios.get('https://acnhapi.com/v1/bugs/');
      const dailyBugsResults = getDailyAcnhResults(apiCallResponse.data);
      setBugIcon(dailyBugsResults[0].icon_uri);
      setNumberOfBugsAvailable(dailyBugsResults.length);
      setTotalBugs(Object.values(apiCallResponse.data).length)
    }
    fetchFishData()
    fetchSeaCreaturesData()
    fetchBugsData()
  }, [])
  return (
    <main className={`home-page ${props.className}`}>
      <TextBlock className={'text-block'}text={"Currently Available"} />
      <section className={'item-cards'}>
        <ItemCard image={fishIcon} caption={`${numberOfFishAvailable}/${totalFish}`}></ItemCard>
        <ItemCard image={seaCreatureIcon} caption={`${numberOfSeaCreaturesAvailable}/${totalSeaCreatures}`}></ItemCard>
        <ItemCard image={bugIcon} caption={`${numberOfBugsAvailable}/${totalBugs}`}></ItemCard>
      </section>
    </main>
  )
};

export default HomePage;