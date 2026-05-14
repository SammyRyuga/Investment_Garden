import { useEffect } from 'react';

function Sky({ weather }) {
  useEffect(() => {
    const skyElement = document.getElementById('sky');
    if (skyElement) {
      if (weather.emoji === '❄️') {
        skyElement.style.background = 'linear-gradient(180deg, #a0c4ff 0%, #c0d6ff 100%)';
      } else if (weather.emoji === '🌪️') {
        skyElement.style.background = 'linear-gradient(180deg, #4a4a8a 0%, #6b6b9e 100%)';
      } else {
        skyElement.style.background = 'linear-gradient(180deg, #5b9bd5 0%, #87ceeb 50%, #b8dff0 100%)';
      }
    }
  }, [weather]);

  return (
    <div id="sky">
      <div className="cloud"></div>
      <div className="cloud"></div>
      <div className="cloud"></div>
      <div id="sun"></div>
    </div>
  );
}

export default Sky;