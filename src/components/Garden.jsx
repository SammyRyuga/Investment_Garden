import PlantCard from './PlantCard';

function Garden({ plots, onPlotClick }) {
  return (
    <div id="garden-area">
      <div id="plots-row" style={{ 
        display: 'flex', 
        gap: '16px', 
        justifyContent: 'center', 
        flexWrap: 'wrap',
        padding: '20px 10px'
      }}>
        {plots.map((plot, idx) => (
          <PlantCard 
            key={idx} 
            plot={plot} 
            index={idx} 
            onClick={onPlotClick} 
          />
        ))}
      </div>
    </div>
  );
}

export default Garden;