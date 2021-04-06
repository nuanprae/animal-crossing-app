import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import ItemCard from '../ItemCard/ItemCard';
import DropdownButton from '../DropdownButton/DropdownButton';

import './app.css';

const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <section className="item-cards-container">
        <ItemCard image={'https://acnhapi.com/v1/icons/fish/1'} name={'bitterling'} />
        <ItemCard image={'https://acnhapi.com/v1/icons/fish/2'} name={'pale chub'} />
        <ItemCard image={'https://acnhapi.com/v1/icons/fish/3'} name={'crucian carp'} />
        <ItemCard image={'https://acnhapi.com/v1/icons/fish/4'} name={'dace'} />
      </section>
      <footer>
        <DropdownButton label="sort by" options={['price', 'name']} />
        <DropdownButton label="location" options={['river', 'sea', 'pond']} />
        <DropdownButton label="language" options={['English', 'German', 'French', 'Spanish']} />
      </footer>
    </div>
  );
};

export default App;
