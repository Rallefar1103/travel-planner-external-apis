const express = require("express");
const router = express.Router();
const axios = require("axios");
const yelp = require("yelp-fusion");
const { fetchYelpData } = require("../handlers/yelpHandler");

require("dotenv").config();

const baseURL = "https://api.yelp.com/v3";
const client = yelp.client(process.env.YELP_API_KEY);

router.post("/getYelpData", async (req, res) => {
  const { term, location } = req.body;

  const searchRequest = {
    term: term,
    location: location,
  };

  try {
    const data = await fetchYelpData(client, searchRequest);

    res.json(data);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
