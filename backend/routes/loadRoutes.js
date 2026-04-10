const express = require('express');
const router = express.Router();

const loadService = require('../services/loadService');

// گرفتن بارها
router.get('/', async (req, res) => {
  const loads = await loadService.getLoads();
  res.json(loads);
});

// انتخاب بار
router.post('/select', async (req, res) => {
  const { loadId } = req.body;
  const result = await loadService.selectLoad(loadId);
  res.json(result);
});

module.exports = router;
