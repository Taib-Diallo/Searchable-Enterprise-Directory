const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

// GET all employees under access_level
router.get("/:employee_no", (req, res) => {
  pool
    .query(`SELECT * FROM "employees" WHERE employee_no = $1`, [
      req.params.employee_no,
    ])
    .then((response) => {
      const access_level = response.rows[0].access_level;
      if (access_level === 0) {
        res.send(response.rows);
      } else {
        pool
          .query(`SELECT * FROM "employees" WHERE access_level <= $1`, [
            access_level,
          ])
          .then((response) => {
            res.send(response.rows);
          })
          .catch((error) => {
            console.log("Error in GET /directory:", error);
            res.sendStatus(500);
          });
      }
    })
    .catch((error) => {
      console.log("Error in GET /directory:", error);
      res.sendStatus(500);
    });
});

module.exports = router;
