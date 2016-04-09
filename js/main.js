var names = require('./names.js'),
    findSuperman = require('./findsuperman.js')

if (findSuperman(names())) {
  document.write('We found superman');
} else {
  document.write('No Superman');
}
