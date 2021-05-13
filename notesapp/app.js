const fs= require('fs');
const yargs=require('yargs');
const chalk=require('chalk');
const { string } = require('yargs');

yargs.version('1.0.0');
//console.log(yargs.argv);

yargs.command({
    command:'add',
    description:'Add a new note',
    builder: {
        title: {
            describe: 'Note Title',
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        console.log("Title:", argv.title,"\n");
        console.log("Body:", argv.body);
    }
})
yargs.command({
    command:'rem',
    description:'Remove an existing note',
    handler: function(){
        console.log("Removing");
    }
})
yargs.command({
    command:'list',
    description:'List all notes',
    handler: function(){
        console.log("Your notes:");
    }
})
yargs.parse();


