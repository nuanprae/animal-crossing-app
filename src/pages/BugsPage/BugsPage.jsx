import { useState, useEffect } from 'react';
import axios from 'axios';
import ItemCardsGrid from '../../components/ItemCardsGrid/ItemCardsGrid';
import DropdownButton from '../../components/DropdownButton/DropdownButton';
import { getDailyAcnhResults } from '../../utils';

import './bugs-page.css';

const BugsPage = () => {
  const [bugs, setBugs] = useState([]);
  const [rarity, setRarity] = useState([]);

  useEffect(() => {
    const fetchBugsData = async () => {
      const apiCallResponse = await axios.get('https://acnhapi.com/v1/bugs/');
      const dailyBugsResults = getDailyAcnhResults(apiCallResponse.data);
      setBugs(dailyBugsResults);
      setRarity([...new Set(dailyBugsResults.map((obj) => obj.availability.rarity))]);
    };
    fetchBugsData();
  }, []);

  return (
    <main className="page-container">
      <ItemCardsGrid data={bugs} />
      <section className="sort">
        <DropdownButton label={'price'} options={['price', 'name']} />
        <DropdownButton label={'location'} options={rarity} />
        <DropdownButton label={'languages'} options={['English', 'German', 'French']} />
      </section>
    </main>
  );
};

export default BugsPage;
