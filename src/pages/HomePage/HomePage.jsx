import villagerImg from '../../assets/villager-30.png';
import MusicPlayer from '../../components/MusicPlayer/MusicPlayer';
import Nav from '../../components/Nav/Nav';

import './home-page.css';

const HomePage = () => {
  return (
    <main className="home-page">
      <Nav />
      <main className="main">
        <h2>Animal Crossing</h2>
        <img className="villager-icon" src={villagerImg} alt="villager-icon" />
        <h2>Daily Report</h2>
      </main>
      <footer className="footer">
        <MusicPlayer />
      </footer>
    </main>
  );
};

export default HomePage;
