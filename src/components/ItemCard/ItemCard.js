import PropTypes from 'prop-types';
import moneyBagIcon from '../../assets/money-bag-icon.png';
import './item-card.css';

const ItemCard = (props) => {
  return (
    <figure className={`item-card ${props.className}`}>
      <img className="item-card-image" src={props.image} alt={props.alt} />
      <figcaption className="item-card-caption1">{props.caption}</figcaption>
      <figcaption className="item-card-caption2">
        <span>{props.price}</span>
        <img className="money-bag-icon" src={moneyBagIcon} alt={'money bag'} />
      </figcaption>
    </figure>
  );
};

ItemCard.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string,
  caption: PropTypes.string,
};

export default ItemCard;
