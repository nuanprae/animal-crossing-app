import PropTypes from 'prop-types';

import DropdownButton from '../../components/DropdownButton/DropdownButton';

import './filter-menu.css';

const FilterMenu = ({ optgroup, selectLanguage, sortByPrice, sortByType, types }) => {
  return (
    <section className="filter-menu">
      <DropdownButton
        onChange={sortByPrice}
        optgroup="Sort by price"
        options={['Lowest price', 'Highest price']}
      />
      <DropdownButton onChange={sortByType} optgroup={optgroup} options={types} />
      <DropdownButton
        onChange={selectLanguage}
        optgroup="Language"
        options={['English', 'Japanese']}
      />
    </section>
  );
};

FilterMenu.propTypes = {
  optgroup: PropTypes.string,
  selectLanguage: PropTypes.func,
  sortByPrice: PropTypes.func,
  sortByType: PropTypes.func,
  types: PropTypes.array,
};
export default FilterMenu;
