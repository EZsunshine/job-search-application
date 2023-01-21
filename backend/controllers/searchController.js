const url = require("url");
const axios = require("axios");
const config = require("../config");
require("dotenv").config();

const headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET",
};

const decodeParams = (searchParams) =>
  Array.from(searchParams.keys()).reduce(
    (acc, key) => ({ ...acc, [key]: searchParams.get(key) }),
    {}
  );

const handlerSearch = (req, res) => {
  const requestURL = url.parse(req.url);
  const decodedParams = decodeParams(new URLSearchParams(requestURL.search));
  const { keyword, location, country = "us" } = decodedParams;

  const targetURL = `${config.BASE_URL}/${country.toLowerCase()}/${
    config.BASE_PARAMS
  }&app_id=${process.env.APP_ID}&app_key=${
    process.env.API_KEY
  }&what=${keyword}&where=${location}`;
  if (req.method === "GET") {
    axios
      .get(targetURL)
      .then((response) => {
        res.writeHead(200, headers);
        res.end(JSON.stringify(response.data));
      })
      .catch((response) => {
        console.log(response);
        res.writeHead(500, headers);
        res.end(JSON.stringify(response));
      });
  }
};

module.exports = { handlerSearch };
