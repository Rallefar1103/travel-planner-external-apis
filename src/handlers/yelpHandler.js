const axios = require("axios");
require("dotenv").config();
const yelp = require("yelp-fusion");

async function fetchYelpData(searchParams) {
  const client = yelp.client(process.env.YELP_API_KEY);
  try {
    const response = await client.search(searchParams);

    return response.jsonBody.businesses;
  } catch (error) {
    console.log(error);
  }
}

module.exports = fetchYelpData;
