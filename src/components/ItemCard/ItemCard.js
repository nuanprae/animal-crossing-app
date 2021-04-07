import PropTypes from 'prop-types';

import './item-card.css';

const ItemCard = (props) => {
  return (
    <figure className="item-card">
      <img src={props.image} alt="" />
      <figcaption>{props.name}</figcaption>
    </figure>
  );
};

ItemCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
};

export default ItemCard;
