const iranLoadBoards = require('./integrations/iranLoadBoards');

async function getLoads() {
  const loads = await iranLoadBoards.fetchLoads();
  return loads;
}

async function selectLoad(loadId) {
  // اینجا فقط انتخاب منطقی انجام میشه
  return {
    success: true,
    message: "Load selected (pending confirmation by user)"
  };
}

module.exports = {
  getLoads,
  selectLoad
};
