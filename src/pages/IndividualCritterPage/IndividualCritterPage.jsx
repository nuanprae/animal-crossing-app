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
    <main className="individual-critter-page">
      <figure className="individual-critter-page__figure">
        <img
          className="individual-critter-page_image"
          src={data?.icon_uri}
          alt={data?.name['name-EUen']}
        />
      </figure>
      <h2 className="individual-critter-page__heading">{data?.name['name-EUen']}</h2>
      <ul className="individual-critter-page__list">
        <li className="individual-critter-page__list-item">
          <strong>Price:</strong> {data?.price}
        </li>
        <li className="individual-critter-page__list-item">
          <strong>Location:</strong> {data?.availability.location}
        </li>
        <li className="individual-critter-page__list-item">
          <strong>Rarity:</strong> {data?.availability.rarity}
        </li>
      </ul>
      <p className="individual-critter-page__paragraph">{data?.['museum-phrase']}</p>
    </main>
  );
};

export default IndividualCritterPage;
