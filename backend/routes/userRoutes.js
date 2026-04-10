const express = require('express');
const router = express.Router();

const db = require('../db');

// ثبت کاربر ساده
router.post('/register', (req, res) => {
  const user = req.body;
  db.users.push(user);

  res.json({
    success: true,
    message: "User registered",
    user
  });
});

module.exports = router;
