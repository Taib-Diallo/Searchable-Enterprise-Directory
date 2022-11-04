const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

// LOGIN current user
router.post("/", (req, res) => {
  pool
    .query(`SELECT * FROM "employees" WHERE Username = $1 AND Password = $2`, [
      req.body.username,
      req.body.password,
    ])
    .then((response) => {
      res.send(response.rows);
    })
    .catch((error) => {
      console.log("Error in GET /directory:", error);
      res.sendStatus(500);
    });
});

module.exports = router;
