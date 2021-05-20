import PropTypes from 'prop-types';

import './drop-down-button.css';

const DropdownButton = (props) => {
  const options = props.options;
  const listOptions = options.map((option) => <option key={option}>{option}</option>);

  return (
    <select className="select" name={props.label} id={props.label} onChange={props.onChange}>
      <optgroup label={props.optgroup}>{listOptions}</optgroup>
    </select>
  );
};

DropdownButton.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  optgroup: PropTypes.string,
  options: PropTypes.array,
};

export default DropdownButton;
