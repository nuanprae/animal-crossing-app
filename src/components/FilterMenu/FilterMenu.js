import PropTypes from 'prop-types';
import DropdownButton from '../../components/DropdownButton/DropdownButton';

import './filter-menu.css';

const FilterMenu = (props) => {
  return (
    <section className="filter-menu">
      <DropdownButton
        label={'Sort by'}
        onChange={props.sortByPrice}
        options={['Lowest price', 'Highest price']}
      />
      <DropdownButton label={props.category} onChange={props.sortByType} options={props.types} />
      <DropdownButton
        label={'Languages'}
        onChange={props.selectLanguage}
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
