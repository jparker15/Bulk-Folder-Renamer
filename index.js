const fs = require('fs');
const path = require('path');

const filePath = '/home/jar/Desktop/New Folder/';
const files = fs.readdirSync(filePath).filter((file) => file.endsWith('.png'));

let count = 1;
const extName = '.png';
files.forEach(file => {

    const oldPath = path.join(filePath, file)
    const newPath = path.join(filePath, count + extName)
    fs.renameSync(oldPath, newPath)
    console.log('Done', count, '...');
    count++;
})
