//Node.js file system module allows you to work with the file system
const fs = require('fs');
//Extract the filename from a file path:
const path = require('path');
//Location of folder or path
const filePath = '/home/jar/Desktop/New Folder/';
//used to synchronously read the contents of a given directory. The method returns an array with all the file names or objects in the directory.
const files = fs.readdirSync(filePath).filter((file) => file.endsWith('.jpg'));

let count = 1;
// const extName = '.png';
/*
files.forEach(file => {

    const oldPath = path.join(filePath, file)
    const newPath = path.join(filePath, count + '.jpg')
    fs.renameSync(oldPath, newPath)
    console.log('Done', count, '...');
    count++;
})
*/