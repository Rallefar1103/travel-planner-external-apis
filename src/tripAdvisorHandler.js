const axios = require("axios");
require("dotenv").config();

async function fetchTripAdvisorData(category, searchQuery, latLong, radius) {
  const apiKey = process.env.TRIPADVISOR_API_KEY;
  const url = process.env.TRIPADVISOR_ENDPOINT;

  try {
    const response = await axios.get(url, {
      headers: { accept: "application/json" },
      params: {
        key: apiKey,
        searchQuery: searchQuery,
        category: category,
        latLong: latLong,
        radius: radius,
        radiusUnit: "km",
        language: "en",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching data from TripAdvisor:", error);
    throw error;
  }
}

module.exports = fetchTripAdvisorData;
