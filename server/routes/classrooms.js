const express = require('express');
const helper = require('../helpers');

const datafile = 'server/data/classrooms.json';
const schoolsDataFile = 'server/data/schools.json';
const activitiesDataFile = 'server/data/activities.json';
const router = express.Router();

/* GET all classrooms */
/* http://localhost:3000/api/classrooms */
router
  .route('/')
  .get((req, res) => {
    const data = helper.readData(datafile);

    const schoolsData = helper.readData(schoolsDataFile);

    // attach schools to the classrooms
    data.forEach((classroom) => {
      // eslint-disable-next-line no-param-reassign
      [classroom.school] = helper.getItemsById(schoolsData, classroom.school_id);
    });

    res.send(data);
  });

/* GET, PUT and DELETE individual classrooms */
router
  .route('/:id')
  .get((req, res) => {
    const data = helper.readData(datafile);
    const schoolsData = helper.readData(schoolsDataFile);
    const activitiesData = helper.readData(activitiesDataFile);

    const matchingClassrooms = data.filter((item) => item.id === parseInt(req.params.id, 10));

    if (matchingClassrooms.length === 0) {
      res.sendStatus(404);
    } else {
      const classMatch = matchingClassrooms[0];

      [classMatch.school] = helper.getItemsById(schoolsData, classMatch.school_id);

      // eslint-disable-next-line max-len
      classMatch.activities = activitiesData.filter((item) => item.classroom_id === req.params.id);

      res.send(classMatch);
    }
  });

module.exports = router;
