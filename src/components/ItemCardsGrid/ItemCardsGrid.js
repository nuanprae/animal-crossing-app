import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import ItemCard from '../ItemCard/ItemCard';
import moneyBagIcon from '../../assets/money-bag-icon.png';

import './item-cards-grid.css';

const ItemCardsGrid = ({ items, linkPath, language }) => {
  return (
    <section className="item-cards-grid">
      {items?.map((item) => {
        return (
          <Link
            className="item-card-link"
            key={item['file-name']}
            to={`/${linkPath}/${item['file-name']}`}
          >
            <ItemCard
              image={item.icon_uri}
              alt={item.name[`${language}`]}
              caption1={item.name[`${language}`]}
              caption2={item.price}
              moneyIcon={<img className="money-bag-icon" src={moneyBagIcon} alt={'money bag'} />}
            ></ItemCard>
          </Link>
        );
      })}
    </section>
  );
};
ItemCardsGrid.propTypes = {
  items: PropTypes.array,
  language: PropTypes.string,
  linkPath: PropTypes.string,
};

export default ItemCardsGrid;
