import { PLANTS } from '../data/plants';

function Shop({ coins, setCoins, plots, setPlots, showToast }) {
  const buyPlant = (plant) => {
    if (coins < plant.cost) {
      showToast("Not enough coins! 🪙");
      return;
    }

    const emptyIndex = plots.findIndex(p => !p);
    if (emptyIndex === -1) {
      showToast("No empty plots left! Sell something first.");
      return;
    }

    const newPlots = [...plots];
    newPlots[emptyIndex] = {
      id: plant.id,
      emoji: plant.emoji,
      name: plant.name,
      value: plant.cost,
      days: 0,
      ...plant
    };

    setPlots(newPlots);
    setCoins(coins - plant.cost);
    showToast(`${plant.emoji} ${plant.name} planted! 🎉`);
  };

  return (
    <div className="panel" id="shop-panel">
      <h3>🛒 PLANT SHOP: Tap plant, then tap empty plot</h3>
      <div className="shop-grid">
        {PLANTS.map((plant, i) => (
          <div 
            key={i} 
            className="shop-item"
            onClick={() => buyPlant(plant)}
          >
            <span className="s-emoji">{plant.emoji}</span>
            <div className="s-info">
              <div className="s-name">{plant.name}</div>
              <div className="s-cost">🪙 {plant.cost}</div>
              <div className={`s-risk ${plant.riskClass}`}>{plant.risk}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;