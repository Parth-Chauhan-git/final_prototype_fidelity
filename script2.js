var fs = require('fs');

let allfiles = fs.readdirSync('./tinified');
for(let i=0 ; i<allfiles.length ; i++){
  let sourceFile = './tinified' +'/'+allfiles[i];
  let destinationFile = './testfolder/'+'/'+allfiles[i];
  fs.copyFileSync(sourceFile , destinationFile);
}