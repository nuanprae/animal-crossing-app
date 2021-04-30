import PropTypes from 'prop-types';

import './item-card.css';

const ItemCard = (props) => {
  return (
    <figure className={`item-card ${props.className}`}>
      <img className="item-card-image" src={props.image} alt={props.alt} />
      <figcaption className="item-card-caption1">{props.caption}</figcaption>
      <figcaption className="item-card-caption2">{props.price}</figcaption>
    </figure>
  );
};

ItemCard.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string,
  caption: PropTypes.string,
};

export default ItemCard;
