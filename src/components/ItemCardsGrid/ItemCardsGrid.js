import ItemCard from '../ItemCard/ItemCard';

import './item-cards-grid.css';

const ItemCardsGrid = (props) => {
  return (
    <section className="item-cards-grid">
      {props.items?.map((item) => {
        return (
          <ItemCard
            key={item['file-name']}
            image={item.icon_uri}
            alt={item.name[`${props.language}`]}
            caption1={item.name[`${props.language}`]}
            caption2={item.price}
          ></ItemCard>
        );
      })}
    </section>
  );
};

export default ItemCardsGrid;
