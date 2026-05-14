function Advisor() {
  const getAITip = () => {
    const tips = [
      "🧙 Diversify your garden! Don't put all coins in one plant.",
      "🌱 Patience is power. Oakspire rewards those who wait!",
      "🌪️ Storms will come. Strong plants survive them.",
      "💰 Buy during storms, sell during Golden Season!",
      "✨ The longer you hold good plants, the more they grow!"
    ];
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    alert(randomTip);
  };

  return (
    <div id="advisor">
      <div id="advisor-char" onClick={getAITip} style={{ cursor: 'pointer' }}>
        🧙
      </div>
    </div>
  );
}

export default Advisor;