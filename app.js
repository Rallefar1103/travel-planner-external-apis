const express = require("express");
const axios = require("axios");
require("dotenv").config();

const app = express();
app.use(express.json());

const tripAdvisorRoutes = require("./src/routes/tripAdvisorRoutes");
app.use("/api", tripAdvisorRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
  console.log(`External APIs service running on http://localhost:${PORT}`);
});
