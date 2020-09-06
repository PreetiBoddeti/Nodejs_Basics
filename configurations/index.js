const config = require('config');

console.log("App Name: ",config.get('name'));
console.log("service: ", config.get('sms.service'));
console.log('SMS Password Name: ', config.get('sms.password'));

//set path for env variables in windows
//open cmd in administrator mode
//set NODE_ENV=production
//echo %NODE_ENV%