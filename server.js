const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const bodyParser = require('body-parser');
const debug = require('debug')('app');

const schools = require('./server/routes/schools');
const classrooms = require('./server/routes/classrooms');
const activities = require('./server/routes/activities');

const app = express();

app.use(favicon(path.join(__dirname, 'public/favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/schools', schools);
app.use('/api/classrooms', classrooms);
app.use('/api/activities', activities);
app.use('/lib', express.static(path.join(__dirname, 'node_modules')));

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

if (app.get('env') === 'development') {
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

app.set('port', process.env.PORT || 3e3);
app.listen(app.get('port'), () => {
  debug(`Start: ${new Date()}`);
  debug(`Listening on port: ${app.get('port')}`);
});

module.exports = app;
