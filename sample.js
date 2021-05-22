var fs = require('fs');

fs.writeFile('demo1.txt','This is NodeJS Demo Created by Hemanth',function(err){

   if(err){
   return console.log(err);
     }
       console.log("File created!");
});