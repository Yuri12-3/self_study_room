
const WATER_KEY = 'studyTown.water';

function getWater() {
  const saved = localStorage.getItem(WATER_KEY);
  return saved === null ? 0 : Number(saved);
}

function addWater(amount) {
  const newTotal = getWater() + amount;
  localStorage.setItem(WATER_KEY, newTotal);
  return newTotal;
}

function renderWaterTo(elementId) {
  const el = document.getElementById(elementId);
  if (el) {
    el.textContent = getWater();
  }
}

