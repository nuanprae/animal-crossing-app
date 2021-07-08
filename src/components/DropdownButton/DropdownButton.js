import PropTypes from 'prop-types';

import './drop-down-button.css';

const DropdownButton = ({ label, onChange, optgroup, options }) => {
  const listOptions = options.map((option) => <option key={option}>{option}</option>);

  return (
    <select className="select" name={label} id={label} onChange={onChange}>
      <optgroup label={optgroup}>{listOptions}</optgroup>
    </select>
  );
};

DropdownButton.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  optgroup: PropTypes.string,
  options: PropTypes.array,
};

export default DropdownButton;
