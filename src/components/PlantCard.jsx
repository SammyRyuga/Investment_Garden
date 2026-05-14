import { motion } from 'framer-motion';
import { STAGE_NAMES, STAGE_DESCRIPTIONS } from '../data/plants';

function PlantCard({ plot, index, onClick }) {
  if (!plot) {
    return (
      <motion.div 
        className="plot empty" 
        onClick={() => onClick(index)}
        whileHover={{ scale: 1.05, y: -8 }}
      >
        <span className="plot-add">＋</span>
        <span className="plot-label">Empty Plot</span>
      </motion.div>
    );
  }

  const stage = Math.min(Math.floor((plot.days || 0) / 5), 3);
  const stageName = STAGE_NAMES[stage];
  const stageDesc = STAGE_DESCRIPTIONS[stage];

  return (
    <motion.div 
      className="plot" 
      onClick={() => onClick(index)}
      whileHover={{ scale: 1.05, y: -8 }}
    >
      <span className="plant-emoji">
        {stage === 3 ? plot.emoji : ['🌰', '🌿', '🌱', '🌲'][stage]}
      </span>
      <span className="plant-name">{plot.name}</span>
      <span className="plant-value">₹{Math.round(plot.value)}</span>
      <span className="plant-stage">{stageName}</span>
      
      <span 
        className="stage-desc" 
        style={{ 
          fontSize: '9px', 
          lineHeight: '1.1', 
          textAlign: 'center', 
          marginTop: '4px', 
          fontWeight: 'normal',
          padding: '0 4px'
        }}
      >
        {stageDesc}
      </span>

      {stage === 3 && <span className="sparkle">✨</span>}
    </motion.div>
  );
}

export default PlantCard;