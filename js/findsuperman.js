var _ = require('underscore');

module.exports = function (values) {
  var foundsuperman = false;

  _.find(values, function(name) {
    if (name === 'Clark Kent') {
      console.log('It\'s Superman!');
      foundsuperman = true;
    } else {
      console.log('... No superman!');
    }
  });

  return foundsuperman;
}
