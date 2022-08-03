const fs = require('fs');
const flag = {'flag':'a'};


exports('log', (fileName, content) => {

    fileName = fileName.includes('.txt') ? fileName : fileName + '.txt';
    const timestamp = new Date().toDateString();
 
    content = `\n[ ${timestamp} ] [${GetInvokingResource()}] ${content}`;
 
    fs.writeFile(`./resources/${GetCurrentResourceName()}/logs/${fileName}`, content,  flag,  (err) => {
        if (err) return console.error(err);
    });
});

console.log(exports['snLogs']['log']('test.txt','dsaddasdsa'));
   

