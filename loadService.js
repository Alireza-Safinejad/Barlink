const iranLoadBoards = require('./integrations/iranLoadBoards');
const { scoreLoad } = require('./scoring');

async function getLoads() {
  let loads = await iranLoadBoards.fetchLoads();

  // اضافه کردن امتیاز به هر بار
  loads = loads.map(load => ({
    ...load,
    score: scoreLoad(load)
  }));

  // مرتب‌سازی بر اساس بهترین بار
  loads.sort((a, b) => b.score - a.score);

  return loads;
}

async function selectLoad(loadId) {
  return {
    success: true,
    message: "بار انتخاب شد (در حالت شبیه‌سازی)"
  };
}

module.exports = {
  getLoads,
  selectLoad
};
