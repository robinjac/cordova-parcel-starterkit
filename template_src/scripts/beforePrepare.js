const fs = require('fs');

if (!fs.existsSync('www')){
    fs.mkdirSync('www');
}