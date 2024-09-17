const express = require('express');
const router = express.Router();
const DataModel = require('../models/DataModel');

// Get all data or filter by year, country, topics, etc.
router.get('/', async (req, res) => {
  const { year, country, topics } = req.query;
  const filters = {};
  if (year) filters.year = year;
  if (country) filters.country = country;
  if (topics) filters.topics = topics;

  try {
    const data = await DataModel.find(filters);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
