
const express = require('express');
const router = express.Router();
const Usage = require('../models/Usage');

router.post('/', async (req, res) => {
  const { domain, timeSpent } = req.body;
  try {
    const existing = await Usage.findOne({ domain });
    if (existing) {
      existing.timeSpent += timeSpent;
      await existing.save();
      res.status(200).json(existing);
    } else {
      const newEntry = new Usage({ domain, timeSpent });
      await newEntry.save();
      res.status(201).json(newEntry);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  const data = await Usage.find();
  res.json(data);
});

module.exports = router;
