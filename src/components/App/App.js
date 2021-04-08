import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import ItemCard from '../ItemCard/ItemCard';

import './app.css';

const App = () => {
  return (
    <section className="fish-page">
      <Header
        className={'header'}
        location={'Sydney'}
        image={'http://res.cloudinary.com/dk7wue4rl/image/upload/v1502188386/sunny_xmwsvi.svg'}
        alt={'clear'}
        date={'03 March'}
        time={'14:30'}
      />
      <main className="main">
        <Nav className={'nav'} />
        <section className="item-cards-container">
          <ItemCard image={'https://acnhapi.com/v1/icons/fish/2'} name={'bitterling'} />
          <ItemCard image={'https://acnhapi.com/v1/icons/fish/2'} name={'pale chub'} />
          <ItemCard image={'https://acnhapi.com/v1/icons/fish/3'} name={'crucian carp'} />
          <ItemCard image={'https://acnhapi.com/v1/icons/fish/4'} name={'dace'} />
          <ItemCard image={'https://acnhapi.com/v1/icons/fish/2'} name={'bitterling'} />
          <ItemCard image={'https://acnhapi.com/v1/icons/fish/2'} name={'pale chub'} />
          <ItemCard image={'https://acnhapi.com/v1/icons/fish/3'} name={'crucian carp'} />
          <ItemCard image={'https://acnhapi.com/v1/icons/fish/4'} name={'dace'} />
          <ItemCard image={'https://acnhapi.com/v1/icons/fish/2'} name={'bitterling'} />
          <ItemCard image={'https://acnhapi.com/v1/icons/fish/2'} name={'pale chub'} />
          <ItemCard image={'https://acnhapi.com/v1/icons/fish/3'} name={'crucian carp'} />
          <ItemCard image={'https://acnhapi.com/v1/icons/fish/4'} name={'dace'} />
        </section>
      </main>
    </section>
  );
};

export default App;
