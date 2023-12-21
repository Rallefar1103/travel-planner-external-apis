const express = require("express");
const axios = require("axios");
require("dotenv").config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 6000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.post("/getAttractions", async (req, res) => {
  try {
    const { location } = req.body;
    const response = await axios.get(`TRIPADVISOR_API_ENDPOINT`, {
      params: {
        location: location,
        // Other necessary parameters as per TripAdvisor API
      },
      headers: {
        Authorization: `Bearer ${process.env.TRIPADVISOR_API_KEY}`,
      },
    });

    const attractions = response.data; // Process and format this data as needed
    res.json(attractions);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching attractions");
  }
});
