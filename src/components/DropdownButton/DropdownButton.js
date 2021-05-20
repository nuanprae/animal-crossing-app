import PropTypes from 'prop-types';

import './drop-down-button.css';

const DropdownButton = (props) => {
  const options = props.options;
  const listOptions = options.map((option) => <option key={option}>{option}</option>);

  return (
    <section className={`drop-down ${props.className}`}>
      <select name={props.label} id={props.label} onChange={props.onChange}>
        <optgroup label={props.optgroup}>{listOptions}</optgroup>
      </select>
    </section>
  );
};

DropdownButton.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.array,
};

export default DropdownButton;
