const iranLoadBoards = require('../integrations/iranLoadBoards');
const scoring = require('./scoringService');
const db = require('../db');

async function getLoads() {
  let loads = await iranLoadBoards.fetchLoads();

  // امتیازدهی
  loads = loads.map(load => ({
    ...load,
    score: scoring.calculate(load)
  }));

  // مرتب‌سازی بهترین‌ها
  loads.sort((a, b) => b.score - a.score);

  return loads;
}

async function selectLoad(loadId) {
  const loads = await iranLoadBoards.fetchLoads();
  const load = loads.find(l => l.id === loadId);

  if (!load) {
    return { success: false, message: "Load not found" };
  }

  db.selectedLoads.push(load);

  return {
    success: true,
    message: "Load selected successfully",
    load
  };
}

module.exports = {
  getLoads,
  selectLoad
};
