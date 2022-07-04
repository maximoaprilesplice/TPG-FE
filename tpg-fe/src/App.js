import logo from './logo.svg';
import './App.css';
import TwoColumn from './components/twoColumnText';
import OurPlatform from './components/ourPlatform';
import TPGGLANCE from './components/TPGGLANCE';
import Slider from './components/LatestNews/LatestNews';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import aos from 'aos';
import 'aos/dist/aos.css';
aos.init({ duration: 1300 });

function App() {
    return (
        <div className="App font-tpg font-normal">
            <Header />
            <Hero />
            <TwoColumn />
            <TPGGLANCE />
            <OurPlatform />
            <Slider />
        </div>
    );
}

export default App;
