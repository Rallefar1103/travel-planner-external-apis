const axios = require("axios");
require("dotenv").config();

async function fetchYelpData(client, searchParams) {
  try {
    const response = await client.search(searchParams);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

module.exports = fetchYelpData;
