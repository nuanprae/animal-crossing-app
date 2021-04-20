import ItemCard from '../ItemCard/ItemCard';

import './item-cards-grid.css';

const ItemCardsGrid = (props) => {
  return (
    <section className="item-cards-grid">
      {props.data.map((item) => (
        <ItemCard
          key={item['file-name']}
          image={item.icon_uri}
          alt={item.name['name-EUen']}
          caption={item.name['name-EUen']}
        ></ItemCard>
      ))}
    </section>
  );
};

export default ItemCardsGrid;
