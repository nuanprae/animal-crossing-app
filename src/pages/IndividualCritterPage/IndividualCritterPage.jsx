import TextBlock from '../../components/TextBlock/TextBlock';

import './individual-critter-page.css';

import useQueryIndividualCritter from '../../hooks/useQueryIndividualCritter';

const IndividualCritterPage = (props) => {
  const { data, isLoading, isError } = useQueryIndividualCritter(props.type);

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
    <main className="fish-details-page">
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

export default IndividualCritterPage;
