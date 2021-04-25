import ItemCard from '../ItemCard/ItemCard';

import './item-cards-grid.css';

const ItemCardsGrid = (props) => {
  return (
    <section className="item-cards-grid">
      {props.data.map((item) => {
        const isSelected = item.speed === props.selectedSpeed;
        return (
          <ItemCard
            className={isSelected ? '' : 'gray-scale'}
            key={item['file-name']}
            image={item.icon_uri}
            alt={item.name[`${props.language}`]}
            caption={item.name[`${props.language}`]}
          ></ItemCard>
        );
      })}
    </section>
  );
};

export default ItemCardsGrid;
