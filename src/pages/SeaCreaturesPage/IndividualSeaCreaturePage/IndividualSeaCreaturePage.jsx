import TextBlock from '../../../components/TextBlock/TextBlock';

import './individual-sea-creature-page.css';

import useQueryIndividualCritter from '../../../hooks/useQueryIndividualCritter';

const IndividualSeaCreaturePage = (props) => {
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
    <main className="individual-sea-creature-page">
      <figure className="individual-sea-creature-page__figure">
        <img
          className="individual-sea-creature-page_image"
          src={data?.icon_uri}
          alt={data?.name['name-EUen']}
        />
      </figure>
      <h2 className="individual-sea-creature-page__heading">{data?.name['name-EUen']}</h2>
      <ul className="individual-sea-creature-page__list">
        <li className="individual-sea-creature-page__list-item">
          <strong>Price:</strong> {data?.price}
        </li>
        <li className="individual-sea-creature-page__list-item">
          <strong>Speed: </strong> {data?.speed}
        </li>
        <li className="individual-sea-creature-page__list-item">
          <strong>Shadow size:</strong> {data?.shadow}
        </li>
      </ul>
      <p className="individual-sea-creature-page__paragraph">{data?.['museum-phrase']}</p>
    </main>
  );
};

export default IndividualSeaCreaturePage;
