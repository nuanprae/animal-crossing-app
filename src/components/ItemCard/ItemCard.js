import classNamesHelper from 'classnames';
import PropTypes from 'prop-types';

import './item-card.css';

const ItemCard = ({ alt, caption1, caption2, className, icon, image }) => {
  return (
    <figure className={classNamesHelper('item-card', className)}>
      <img className="item-card-image" src={image} alt={alt} />
      <figcaption className="item-card-caption1">{caption1}</figcaption>
      <figcaption className="item-card-caption2">
        {icon}
        {caption2}
      </figcaption>
    </figure>
  );
};

ItemCard.propTypes = {
  alt: PropTypes.string,
  caption1: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  caption2: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  icon: PropTypes.object,
  image: PropTypes.string,
};

export default ItemCard;
