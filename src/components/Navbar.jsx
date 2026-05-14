function Navbar({ day, coins, worth, weather, season }) {
  return (
    <div id="topbar">
      <div className="logo">🌱 Investment Garden</div>
      
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <div className="stat-pill">
          <span>🪙</span> <span>{Math.round(coins)}</span>
        </div>
        <div className="stat-pill">
          <span>✨</span> <span>₹{Math.round(worth)}</span>
        </div>
        
        <div 
          id="weather-badge" 
          style={{ cursor: 'pointer' }}
          onClick={() => alert(`${weather.emoji} ${weather.name}\n\n${weather.desc}`)}
        >
          {weather.emoji} {weather.name}
        </div>

        {season && (
          <div className="stat-pill">
            {season.name}
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;