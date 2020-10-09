const express = require('express');
const helper = require('../helpers');

const datafile = 'server/data/schools.json';
const router = express.Router();

/* GET all schools */
/* http://localhost:3000/api/schools */
router
  .route('/')
  .get((req, res) => {
    const data = helper.readData(datafile);
    res.send(data);
  });

/* GET, PUT and DELETE individual schools */
router
  .route('/:id')
  .get((req, res) => {
    const data = helper.readData(datafile);
    const matchingSchools = data.filter((item) => item.id === parseInt(req.params.id, 10));

    if (matchingSchools.length === 0) {
      res.sendStatus(404);
    } else {
      res.send(matchingSchools[0]);
    }
  });

module.exports = router;
