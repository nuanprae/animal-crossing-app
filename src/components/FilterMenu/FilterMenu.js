import PropTypes from 'prop-types';

import DropdownButton from '../../components/DropdownButton/DropdownButton';

import './filter-menu.css';

const FilterMenu = ({
  handleSelectLanguage,
  handleSortByPrice,
  handleSortByType,
  optgroup,
  types,
}) => {
  return (
    <section className="filter-menu">
      <DropdownButton
        onChange={handleSortByPrice}
        optgroup="Sort by price"
        options={['Lowest price', 'Highest price']}
      />
      <DropdownButton onChange={handleSortByType} optgroup={optgroup} options={types} />
      <DropdownButton
        onChange={handleSelectLanguage}
        optgroup="Language"
        options={['English', 'Japanese']}
      />
    </section>
  );
};

FilterMenu.propTypes = {
  handleSelectLanguage: PropTypes.func,
  handleSortByPrice: PropTypes.func,
  handleSortByType: PropTypes.func,
  optgroup: PropTypes.string,
  types: PropTypes.array,
};
export default FilterMenu;
