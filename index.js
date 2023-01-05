//Node.js file system module allows you to work with the file system
const fs = require('fs');

//Extract the filename from a file path:
const path = require('path');

//Location of folder or path
// const filePath = '/home/jar/Desktop/New Folder/';
// const filePath = 'C:/Users/Jar/Desktop/New folder';

//used to synchronously read the contents of a given directory. The method returns an array with all the file names or objects in the directory.
// const files = fs.readdirSync(filePath).filter((file) => file.endsWith('.jpg'));

//an array of the orginal names of all directories in a specified directory
// const directoriesInDirectory = fs.readdirSync(filePath, { withFileTypes: true })
//     .filter((item) => item.isDirectory())
//     .map((item) => item.name);

// console.log(directoriesInDirectory);

const dires = fs.readdirSync(filePath, { withFileTypes: true}).filter((dire) => dire.isDirectory());

function noSpecialCharacters(){

        dires.forEach(dire => {
        let newName = dire.name;
        newName = newName.replace(/\./g, ' ');

        const oldPath = path.join(filePath, dire.name);
        const newPath = path.join(filePath, newName);
        fs.renameSync(oldPath, newPath)
        console.log(newName + ' Done...');
    })
}

noSpecialCharacters();

// console.log(dires);
// let arr = [];

// directoriesInDirectory.forEach(item => {
//     // const noSpecialChars = item.replace(/[^a-zA-Z0-9 ]/g, ' ');
//     const noSpecialChars = item.replace(/\./g, ' ');
//     arr.push(noSpecialChars);
// });

// console.log(arr);


const fs = require('fs');
const path = require('path');
const filePath = 'C:/Users/userName/Desktop/New folder';

let count = 1;
const extName = '.png';
files.forEach(file => {

    const oldPath = path.join(filePath, file)
    const newPath = path.join(filePath, count + extName)

    fs.renameSync(oldPath, newPath)

    console.log('Done', count, '...');
    count++;
})
