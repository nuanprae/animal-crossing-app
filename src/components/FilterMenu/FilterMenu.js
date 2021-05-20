import PropTypes from 'prop-types';
import DropdownButton from '../../components/DropdownButton/DropdownButton';

import './filter-menu.css';

const FilterMenu = (props) => {
  return (
    <section className="filter-menu">
      <DropdownButton
        onChange={props.sortByPrice}
        optgroup="Sort by price"
        options={['Lowest price', 'Highest price']}
      />
      <DropdownButton onChange={props.sortByType} optgroup={props.optgroup} options={props.types} />
      <DropdownButton
        onChange={props.selectLanguage}
        optgroup="Language"
        options={['English', 'Japanese']}
      />
    </section>
  );
};

FilterMenu.propTypes = {
  category: PropTypes.string,
  sortByPrice: PropTypes.func,
  sortByType: PropTypes.func,
  selectLanguage: PropTypes.func,
  types: PropTypes.array,
};
export default FilterMenu;
