import './drop-down-button.css';

const DropdownButton = (props) => {
  const options = props.options;
  const listOptions = options.map((option) => (
    <option value={option} key={option}>
      {option}
    </option>
  ));
  return (
    <section className="drop-down">
      <label>{props.label}: </label>
      <select name={props.label} id={props.label}>
        {listOptions}
      </select>
    </section>
  );
};

export default DropdownButton;
