import { useParams } from 'react-router';
import { useQuery } from 'react-query';
import axios from 'axios';

import TextBlock from '../../../components/TextBlock/TextBlock';

import './fish-details-page.css';

const FishDetailsPage = () => {
  const { id } = useParams();
  const { isLoading, isError, data } = useQuery(
    `fish-${id}`,
    async () => {
      const apiCallResponse = await axios.get(`https://acnhapi.com/v1/fish/${id}`);
      return apiCallResponse.data;
    },
    { refetchOnMount: false, refetchOnWindowFocus: false },
  );

  if (isLoading) {
    return (
      <main className="page-container">
        <TextBlock text="Loading..." />
      </main>
    );
  }

  if (isError) {
    return (
      <main className="page-container">
        <TextBlock text="Sorry...something went wrong" />
      </main>
    );
  }

  return (
    <main className="page-container">
      <figure className="figure">
        <img src={data?.icon_uri} alt={data?.name['name-EUen']} />
      </figure>
      <h2>{data?.name['name-EUen']}</h2>
      <ul>
        <li>
          <strong>Price:</strong> {data?.price}
        </li>
        <li>
          <strong>Location:</strong> {data?.availability.location}
        </li>
        <li>
          <strong>Rarity:</strong> {data?.availability.rarity}
        </li>
      </ul>
      <p>{data?.['museum-phrase']}</p>
    </main>
  );
};

export default FishDetailsPage;
