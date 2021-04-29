import PropTypes from 'prop-types';

import './drop-down-button.css';

const DropdownButton = (props) => {
  const options = props.options;
  const listOptions = options.map((option) => <option key={option}>{option}</option>);

  return (
    <section className={`drop-down ${props.className}`}>
      <label>{props.label}: </label>
      <select name={props.label} id={props.label} onChange={props.onChange}>
        {listOptions}
      </select>
    </section>
  );
};

DropdownButton.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.array,
};

export default DropdownButton;
