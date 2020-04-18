//created: 4/16/20
//Developer: James W. Hudeck

//last updated: 4/18/2020
//Developer: James W. Hudeck

const axios = require("axios");
require("dotenv").config();

const api = {
  getUser(username) {
    return axios
      .get(
        `https://api.github.com/users/${username}?client_id=${
        process.env.CLIENT_ID
        }&client_secret=${process.env.CLIENT_SECRET}`
      )
      .catch(err => {
        console.log("User Not Found")
        //ends node request
        process.exit(1);
      });
  }
};

module.exports = api;
