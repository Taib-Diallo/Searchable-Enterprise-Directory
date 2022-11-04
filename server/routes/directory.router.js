const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

// GET all employees
router.get("/:employee_no", (req, res) => {
  pool
    .query(`SELECT * FROM "employees"`)
    .then((response) => {
      res.send(response.rows);
    })
    .catch((error) => {
      console.log("Error in GET /directory:", error);
      res.sendStatus(500);
    });
});

module.exports = router;
