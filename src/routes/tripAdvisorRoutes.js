const express = require("express");
const router = express.Router();
const axios = require("axios");
require("dotenv").config();
const { fetchTripAdvisorData } = require("../handlers/tripAdvisorHandler");

router.post("/getTripAdvisorData", async (req, res) => {
  try {
    const { searchQuery, category, latLong, radius } = req.body;
    const data = await fetchTripAdvisorData(
      category,
      searchQuery,
      latLong,
      radius
    );
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching attractions");
  }
});

module.exports = router;
