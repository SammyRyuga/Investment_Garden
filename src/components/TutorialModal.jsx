function TutorialModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div id="modal-overlay">
      <div id="modal">
        <h2>🌱 Welcome, Young Gardener!</h2>
        <p>
          This is your <strong>Investment Garden</strong>!<br/><br/>
          
          Every plant you grow is like owning a piece of a real company.<br/><br/>
          
          <strong>Cactus Corp</strong>: Safe & slow<br/>
          <strong>Bloomflower</strong>: Balanced growth<br/>
          <strong>Rocketshroom</strong>: High risk, high reward<br/>
          <strong>Oakspire</strong>: Slow but grows forever<br/><br/>
          
          Buy plants, watch them grow, survive weather changes, and learn investing by playing!
        </p>
        <button id="modal-close" onClick={onClose}>
         🌿 Start Gardening! 🌿
        </button>
      </div>
    </div>
  );
}

export default TutorialModal;