var fs = require('fs');
var csv = require('fast-csv');
fs.createReadStream('articles.csv')
  .pipe(csv())
  .on('data',function(data){
    console.log(data);
    fs.writeFileSync('articles.json', data);
  })
  .on('end',function(data){
    console.log('Read finished');

  });

// let data = JSON.stringify(csv);
// fs.writeFileSync('articles.json', data);
