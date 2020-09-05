const Bundler = require('parcel-bundler');
const fs = require('fs');
const open = require('open');

fs.writeFileSync('platforms/browser/www/splash.png', fs.readFileSync('resources/splash.png'));

const bundler = new Bundler('src/index.html', {outDir: './platforms/browser/www'});

let first = true;

bundler.on('bundled', bundle => {
    if(first){
        const newIndex = bundle.entryAsset.generated.html.replace('<div id="cordova"></div>', '<script src="cordova.js"></script>');
        fs.writeFileSync('platforms/browser/www/index.html', newIndex);
        first = false;
        open('http://localhost:1234');
    }
});

bundler.serve();
