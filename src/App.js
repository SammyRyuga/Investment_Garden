import './App.css';
import { useGameState } from './hooks/useGameState';
import Navbar from './components/Navbar';
import Sky from './components/Sky';
import Garden from './components/Garden';
import Shop from './components/Shop';
import InfoPanel from './components/InfoPanel';
import EventPanel from './components/EventPanel';
import Advisor from './components/Advisor';
import LessonPop from './components/LessonPop';
import TutorialModal from './components/TutorialModal';
import Toast from './components/Toast';

function App() {
  const game = useGameState();

  const handlePlotClick = (index) => {
    const plot = game.plots[index];

    if (!plot) {
      game.showToast("Select a plant from the shop first! 🛒");
    } else {
      game.setSelectedPlot(index);
    }
  };

  return (
    <div className="game-container">
      <Sky weather={game.weather} day={game.day} />

      <Navbar 
        day={game.day}
        coins={game.coins}
        worth={game.worth}
        weather={game.weather}
        season={game.season}
      />

      <div id="app">
        <div id="garden-area">
          <Advisor />
          <Garden 
            plots={game.plots} 
            setPlots={game.setPlots}
            coins={game.coins}
            setCoins={game.setCoins}
            setSelectedPlot={game.setSelectedPlot}
            onPlotClick={handlePlotClick}
          />
          <LessonPop visible={game.lesson.show} lesson={game.lesson.text} />
        </div>

        <div id="bottom-area">
          <Shop 
            coins={game.coins} 
            setCoins={game.setCoins} 
            plots={game.plots} 
            setPlots={game.setPlots}
            showToast={game.showToast}
          />

          <InfoPanel 
            plots={game.plots}
            selectedPlot={game.selectedPlot}
            setSelectedPlot={game.setSelectedPlot}
            coins={game.coins}
            setCoins={game.setCoins}
            sellPlant={game.sellPlant}
          />

          <EventPanel 
            day={game.day}
            setDay={game.setDay}
            weather={game.weather}
            setWeather={game.setWeather}
            plots={game.plots}
            setPlots={game.setPlots}
            coins={game.coins}
            setCoins={game.setCoins}
            advanceDay={game.advanceDay}
          />
        </div>
      </div>

      <TutorialModal 
        isOpen={game.tutorialOpen} 
        onClose={() => game.setTutorialOpen(false)} 
      />

      <Toast 
        message={game.toast.message} 
        show={game.toast.show} 
        onClose={() => {}} 
      />
    </div>
  );
}

export default App;
