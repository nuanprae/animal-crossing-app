import villagerImg from '../../assets/villager-30.png';

import './home-page.css';

const HomePage = () => {
  return (
      <main className="main">
        <h2>Animal Crossing</h2>
        <img className="villager-icon" src={villagerImg} alt="villager-icon" />
        <h2>Daily Report</h2>
      </main>
  );
};

export default HomePage;
