const fs = require('fs');
fs.writeFile('target.txt', function(err, data){
  if (err) {
    throw err;
  }
  console.log("File Saved!");
});