import PropTypes from 'prop-types';
// import moneyBagIcon from '../../assets/money-bag-icon.png';
import './item-card.css';

const ItemCard = (props) => {
  return (
    <figure className={`item-card ${props.className}`}>
      <img className="item-card-image" src={props.image} alt={props.alt} />
      <figcaption className="item-card-caption1">{props.caption1}</figcaption>
      <figcaption className="item-card-caption2">
        {props.caption2}
        {/* <img className="money-bag-icon" src={moneyBagIcon} alt={'money bag'} /> */}
      </figcaption>
    </figure>
  );
};

ItemCard.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
  caption1: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  caption2: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  image: PropTypes.string,
};

export default ItemCard;
