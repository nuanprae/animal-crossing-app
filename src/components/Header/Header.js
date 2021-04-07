import './header.css';

const Header = (props) => {
  return (
    <header className="header">
      <h2>Animal Crossing Daily Report</h2>
      <section className="sub-header">
        <h4>{props.location}</h4>
        <img src={props.image} alt={props.alt} />
        <h4>{props.date}</h4>
        <h4>{props.time}</h4>
      </section>
    </header>
  );
};

export default Header;
