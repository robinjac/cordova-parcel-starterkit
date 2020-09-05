const Bundler = require('parcel-bundler');
const fs = require('fs');
const rf = require('rimraf');

const options = {
    production: true,
    outDir: './www', // The out directory to put the build files in, defaults to dist
    publicUrl: './', // The url to serve on, defaults to '/'
    watch: false, // Whether to watch the files and rebuild them on change, defaults to process.env.NODE_ENV !== 'production'
    cache: false, // Enabled or disables caching, defaults to true
    contentHash: false, // Disable content hash from being included on the filename
    global: 'moduleName', // Expose modules as UMD under this name, disabled by default
    minify: true, // Minify files, enabled if process.env.NODE_ENV === 'production'
    target: 'browser', // Browser/node/electron, defaults to browser
    bundleNodeModules: true, // By default, package.json dependencies are not included when using 'node' or 'electron' with 'target' option above. Set to true to adds them to the bundle, false by default
    sourceMaps: false, // Enable or disable sourcemaps, defaults to enabled (minified builds currently always create sourcemaps)
    detailedReport: true // Prints a detailed report of the bundles, assets, filesizes and times, defaults to false, reports are only printed if watch is disabled
};

const bundler = new Bundler('src/index.html', options);

bundler.on('bundled', bundle => {
    const newIndex = bundle.entryAsset.generated.html.replace('<div id="cordova"></div>', '<script src="cordova.js"></script>');
    fs.writeFileSync('www/index.html', newIndex);
});

rf.sync('www');
bundler.bundle();
