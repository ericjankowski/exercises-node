const fs = require('fs');
const events = require('events');

class Watcher extends events.EventEmitter{
    constructor(watchDirectory, processedDirectory){
        super();
        this.watchDirectory = watchDirectory;
        this.processedDirectory = processedDirectory;
    }
    watch(){
        fs.readdir(this.watchDirectory, (err, files) => {
            if(err) throw err;
            for(var index in files){
                this.emit('process', files[index])
            }
        });
    }

    start(){
        fs.watchFile(this.watchDirectory, () =>{
            this.watch();
        });
    }
}

module.exports = Watcher;