const express = require("express");
const router = express.Router();
var request = require("request");

const dotenv = require("dotenv");
dotenv.config();

const USER = process.env.RPC_USER;
const PASS = process.env.RPC_PASSWORD;

const headers = {
  "content-type": "text/plain;"
};

router.get("/test", (req, res) => res.json({ msg: "backend works" }));

// getinfo kısmı **
router.get("/getinfo", (req, res) => {
    var dataString = `{"method": "getinfo", "params": [], "jsonrpc": "2.0"}`;
    var options = {
      url: `http://127.0.0.1:3000/`,
      method: "POST",
      headers: headers,
      body: dataString
    };
    
    callback = (error, response, body) => {
      if (!error && response.statusCode == 200) {
        const data = JSON.parse(body);
        res.send(data);
      }
    };
    request(options, callback);
  });
// getinfo kısmı **

module.exports = router;