function InfoPanel({ plots, selectedPlot, sellPlant }) {
  const worth = plots.reduce((sum, p) => sum + (p?.value || 0), 0);

  return (
    <div className="panel" id="info-panel">
      <h3>🌱 Garden Status</h3>
      <div className="info-stat">
        <span className="label">Garden Worth: </span>
        <span className="value">₹{Math.round(worth)}</span>
      </div>

      {selectedPlot !== null && plots[selectedPlot] && (
        <>
          <div className="info-stat">
            <span className="label">Selected:</span>
            <span className="value">
              {plots[selectedPlot].emoji} {plots[selectedPlot].name}
            </span>
          </div>
          <button id="sell-btn" onClick={() => sellPlant(selectedPlot)}>
            Sell Plant 🌿
          </button>
        </>
      )}
    </div>
  );
}

export default InfoPanel;