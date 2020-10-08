const fs = require('fs');

exports.readData = function (datafile) {
  const data = fs.readFileSync(datafile, 'utf8');
  return JSON.parse(data);
};

exports.getItemsById = function (data, id) {
  return data.filter((item) => item.id === id);
};
