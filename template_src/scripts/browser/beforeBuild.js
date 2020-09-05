const rf = require('rimraf');
const fs = require('fs');

rf.sync('.cache');
rf.sync('www');
rf.sync('platforms/browser');

fs.mkdirSync('www');