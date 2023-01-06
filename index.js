//Node.js file system module allows you to work with the file system
const fs = require('fs');
//Extract the filename from a file path:
const path = require('path');
// Location of folder or path
// const filePath = '/home/jar/Desktop/New Folder/';
const filePath = 'C:/Users/Jar/Desktop/New folder';
// used to synchronously read the contents of a given directory.
// an array of the orginal names of all directories in a specified directory
const dires = fs.readdirSync(filePath, { withFileTypes: true}).filter((dire) => dire.isDirectory());

        dires.forEach(dire => {
            
            let newName = dire.name;
            // replaces all periods with spaces using Regular Expressions
            newName = newName.replace(/\./g, ' ');
            // replaces all spaces with periods
            // newName = newName.replace(/\s+/g, '.');

            // remove ALL special charcters 
            // const noSpecialChars = newName.replace(/[^a-zA-Z0-9 ]/g, ' ');

            // remove specific phrases
            // const clean = newName.replace('-RARBG'/g, '');

            console.log(dire.name + " ---> ");
            const oldPath = path.join(filePath, dire.name);
            const newPath = path.join(filePath, newName);
            fs.renameSync(oldPath, newPath)
            console.log(newName);
        })
  