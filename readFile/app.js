const fs = require('fs'); // file system 
fs.readFile('file.txt', 'utf8', function(err, data){
    if(err) throw err;
    console.log(data);
})