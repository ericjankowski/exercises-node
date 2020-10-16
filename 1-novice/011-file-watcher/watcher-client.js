const { fstat } = require('fs');
const Watcher = require('./watcher');
const fs = require('fs');
const watcher_import = require('./watcher');
const watcher = new Watcher('./watching', './processed');

watcher.on('process', (file) =>{
    const watchFile = `${watcher.watchDirectory}/${file}`;
    const processedFile = `${watcher.processedDirectory}/${file.toLowerCase()}`;
    fs.rename(watchFile, processedFile, err =>{
        if(err) throw err;
    });
});

watcher.start();