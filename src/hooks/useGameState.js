import { useState, useEffect, useCallback } from 'react';
import { PLANTS, getPlantById } from '../data/plants';
import { WEATHERS, SEASONS } from '../data/weathers';
import { LESSONS } from '../data/lessons';
import { r, ri, calculateGardenWorth } from '../utils';

export function useGameState() {
  const [coins, setCoins] = useState(500);
  const [day, setDay] = useState(1);
  const [plots, setPlots] = useState([null, null, null, null, null, null]);
  const [weather, setWeather] = useState(WEATHERS[0]);
  const [season, setSeason] = useState(SEASONS[0]);
  const [selectedPlot, setSelectedPlot] = useState(null);
  const [toast, setToast] = useState({ show: false, message: '' });
  const [lesson, setLesson] = useState({ show: false, text: '' });
  const [tutorialOpen, setTutorialOpen] = useState(true);

  const showToast = useCallback((message) => {
    setToast({ show: true, message });
    setTimeout(() => setToast({ show: false, message: '' }), 2800);
  }, []);

  const advanceDay = useCallback(() => {
    const newDay = day + 1;
    setDay(newDay);

    const newWeather = WEATHERS[ri(0, WEATHERS.length - 1)];
    setWeather(newWeather);

    if (newDay % 10 === 0) {
      const newSeasonIndex = Math.floor(newDay / 10) % SEASONS.length;
      setSeason(SEASONS[newSeasonIndex]);
      showToast(`🌍 Season changed to ${SEASONS[newSeasonIndex].name}!`);
    }

    const updatedPlots = plots.map(plot => {
      if (!plot) return null;

      const plantInfo = getPlantById(plot.id);
      if (!plantInfo) return plot;

      plot.days = (plot.days || 0) + 1;

      let growPct = r(plantInfo.growMin, plantInfo.growMax);

      if (newWeather.emoji === '🌪️' || newWeather.emoji === '🐛') {
        if (Math.random() > plantInfo.stormResist) {
          growPct = -Math.abs(growPct) * 1.5;
        }
      } else {
        growPct *= newWeather.mod;
      }

      const oldValue = plot.value;
      plot.value = Math.max(10, plot.value * (1 + growPct / 100));

      return plot;
    });

    setPlots(updatedPlots);

    if (newDay % 3 === 0) {
      setCoins(prev => prev + 30);
      showToast('💰 +₹30 daily savings!');
    }

    if (newDay % 4 === 0) {
      const lessonText = LESSONS[(Math.floor(newDay / 4) - 1) % LESSONS.length];
      setLesson({ show: true, text: lessonText });
      setTimeout(() => setLesson({ show: false, text: '' }), 4500);
    }
  }, [day, plots, showToast]);

  const plantInPlot = (plotIndex, plant) => {
    if (coins < plant.cost) {
      showToast("Not enough coins! 🪙");
      return false;
    }

    const emptyIndex = plots.findIndex(p => !p);
    if (emptyIndex === -1) {
      showToast("No empty plots! Sell a plant first.");
      return false;
    }

    const newPlots = [...plots];
    newPlots[emptyIndex] = {
      ...plant,
      value: plant.cost,
      days: 0
    };

    setPlots(newPlots);
    setCoins(prev => prev - plant.cost);
    showToast(`${plant.emoji} ${plant.name} planted! 🎉`);
    return true;
  };

  const sellPlant = (plotIndex) => {
    if (!plots[plotIndex]) return;

    const value = Math.round(plots[plotIndex].value);
    const name = plots[plotIndex].name;

    setCoins(prev => prev + value);

    const newPlots = [...plots];
    newPlots[plotIndex] = null;
    setPlots(newPlots);
    setSelectedPlot(null);

    showToast(`Sold ${name} for ₹${value} 🪙`);
  };

  const worth = calculateGardenWorth(plots);

  return {
    coins, setCoins,
    day, setDay,
    plots, setPlots,
    weather, season,
    selectedPlot, setSelectedPlot,
    tutorialOpen, setTutorialOpen,
    toast, lesson,
    worth,
    advanceDay,
    plantInPlot,
    sellPlant,
    showToast
  };
}