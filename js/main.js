var names = require('./names.js'),
    findSuperman = require('./findsuperman.js')

if (findSuperman(names())) {
  document.write('We found superm');
} else {
  document.write('No Superman');
}
