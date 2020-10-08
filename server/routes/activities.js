const express = require('express');
const helper = require('../helpers');

const datafile = 'server/data/activities.json';
const router = express.Router();

/* GET all activities */
/* http://localhost:3000/api/activities */
router
  .route('/')
  .get((req, res) => {
    const data = helper.readData(datafile);

    const classroomDataFile = 'server/data/classrooms.json';
    const classroomData = helper.readData(classroomDataFile);

    // attach classrooms to the activities
    data.forEach((activity) => {
      // eslint-disable-next-line no-param-reassign
      [activity.classroom] = helper.getItemsById(classroomData, activity.classroom_id);
    });

    res.send(data);
  });

/* GET, PUT and DELETE individual classrooms */
router
  .route('/:id')
  .get((req, res) => {
    const data = helper.readData(datafile);

    const matchingActivities = data.filter((item) => item.activity_id === req.params.id);

    if (matchingActivities.length === 0) {
      res.sendStatus(404);
    } else {
      res.send(matchingActivities[0]);
    }
  });

module.exports = router;
