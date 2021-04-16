import PropTypes from 'prop-types';

import './item-card.css';

const ItemCard = (props) => {
  return (
    <figure className="item-card">
      <img className="item-card-image" src={props.image} alt={props.alt} />
      <figcaption className="item-card-caption">{props.name}</figcaption>
    </figure>
  );
};

ItemCard.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string,
  name: PropTypes.string,
};

export default ItemCard;
