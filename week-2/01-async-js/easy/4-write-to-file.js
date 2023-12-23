// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand
//  async tasks.

const fs= require('fs');

const appendContent = 'This is appended data.'
fs.appendFile('4-write-to-file.md', appendContent, function(err){
    if(err){
        throw err;
    }
    console.log('data is appended');
});

for(let i=0; i<10000; i++){
    console.log(i);
}
