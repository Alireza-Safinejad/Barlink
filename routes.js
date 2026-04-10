const express = require('express');
const router = express.Router();
const loadService = require('./loadService');

router.get('/loads', async (req, res) => {
  const loads = await loadService.getLoads();
  res.json(loads);
});

router.post('/select-load', async (req, res) => {
  const result = await loadService.selectLoad(req.body);
  res.json(result);
});

module.exports = router;
