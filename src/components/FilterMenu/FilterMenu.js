import PropTypes from 'prop-types';
import DropdownButton from '../../components/DropdownButton/DropdownButton';

import './filter-menu.css';

const FilterMenu = (props) => {
  return (
    <section className="filter-menu">
      <DropdownButton
        label={'sort by'}
        onChange={props.sortByPrice}
        options={['Lowest price', 'Highest price']}
      />
      <DropdownButton label={'location'} onChange={props.sortByType} options={props.types} />
      <DropdownButton
        label={'languages'}
        onChange={props.selectLanguage}
        options={['English', 'Japanese']}
      />
    </section>
  );
};

FilterMenu.propTypes = {
  sortByPrice: PropTypes.func,
  sortByType: PropTypes.func,
  selectLanguage: PropTypes.func,
  types: PropTypes.array,
};
export default FilterMenu;
