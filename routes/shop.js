const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("<h1>Homw Page</h>");
});

module.exports = router;