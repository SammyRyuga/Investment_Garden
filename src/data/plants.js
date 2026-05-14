export const PLANTS = [
  {
    id: 'cactus',
    emoji: '🌵',
    name: 'Cactus Corp',
    cost: 80,
    risk: 'Low',
    riskClass: 'risk-low',
    color: '#5cb85c',
    desc: 'Safe and steady like government bonds. Survives storms very well.',
    growMin: 2,
    growMax: 6,
    stormResist: 0.9,
  },
  {
    id: 'bloom',
    emoji: '🌸',
    name: 'Bloomflower',
    cost: 120,
    risk: 'Medium',
    riskClass: 'risk-med',
    color: '#e8902a',
    desc: 'Balanced growth like big reliable companies.',
    growMin: 3,
    growMax: 12,
    stormResist: 0.6,
  },
  {
    id: 'shroom',
    emoji: '🍄',
    name: 'Rocketshroom',
    cost: 200,
    risk: 'High',
    riskClass: 'risk-high',
    color: '#e74c3c',
    desc: 'High risk high reward like startups. Can grow fast or crash.',
    growMin: -8,
    growMax: 25,
    stormResist: 0.25,
  },
  {
    id: 'oak',
    emoji: '🌳',
    name: 'Oakspire',
    cost: 150,
    risk: 'Long-term',
    riskClass: 'risk-low',
    color: '#3a7d3a',
    desc: 'Grows slowly but becomes very powerful over time.',
    growMin: 1,
    growMax: 5,
    stormResist: 0.95,
  }
];

export const STAGE_NAMES = ['Seed', 'Sprout', 'Sapling', 'Mature'];

export const STAGE_DESCRIPTIONS = {
  0: "Just planted! Waiting to sprout. 🌰",
  1: "First tiny leaves! Your investment has started. 🌿",
  2: "Growing strong. Patience is paying off. 🌱",
  3: "Fully grown! Earning maximum rewards. ✨"
};

export const getPlantById = (id) => PLANTS.find(p => p.id === id);