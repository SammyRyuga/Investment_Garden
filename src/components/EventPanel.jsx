import { useState, useRef } from 'react';

function EventPanel({ day, advanceDay, weather }) {
  const [isFastForward, setIsFastForward] = useState(false);
  const intervalRef = useRef(null);

  const startFastForward = () => {
    setIsFastForward(true);
    intervalRef.current = setInterval(() => {
      advanceDay();
    }, 500);
  };

  const stopFastForward = () => {
    setIsFastForward(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  return (
    <div 
      className="panel" 
      id="event-panel"
      style={{ 
        transform: 'translateY(-80px)', 
        position: 'relative',
        zIndex: 10,
        height: 'fit-content' 
      }}
    >
      <h3>🌤️ Today's News</h3>
      
      <div id="event-msg" style={{ margin: '10px 0' }}>
        {weather.emoji} <b>{weather.name}</b> — {weather.desc}
      </div>

      <button 
        id="next-day-btn" 
        onClick={advanceDay}
        style={{
          background: '#5cb85c',
          color: 'white',
          border: 'none',
          borderRadius: '10px',
          padding: '8px 0',
          fontWeight: '800',
          cursor: 'pointer',
          width: '100%'
        }}
      >
        Next Day
      </button>

      <button 
        onMouseDown={startFastForward}
        onMouseUp={stopFastForward}
        onMouseLeave={stopFastForward}
        style={{ 
          marginTop: '8px', 
          background: isFastForward ? '#e8902a' : '#5cb85c',
          color: 'white',
          border: 'none',
          borderRadius: '10px',
          padding: '8px 0',
          fontWeight: '800',
          cursor: 'pointer',
          width: '100%'
        }}
      >
        {isFastForward ? 'Fast Forwarding...' : 'Hold for Fast Forward'}
      </button>

      <div id="day-counter" style={{ marginTop: '8px', fontSize: '12px', textAlign: 'center', color: '#666' }}>
        Day {day} of your journey
      </div>
    </div>
  );
}

export default EventPanel;