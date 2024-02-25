const fs = require('node:fs')

/**
  * Read JSON file content synchronously.
  * @param {String} path - Path to json file.
  * @returns {Object} 
*/
function read (path) {
  return JSON.parse(fs.readFileSync(path, 'utf-8'))
}

/**
  * Write content to JSON file synchronously.
  * @param {String} path - Path to json file.
  * @param {Object} user - User data.
  * @param {String} usersFile - Name of file to be written.
*/
function write (path, user, usersFile) {
  usersFile.push(user)

  try {
    fs.writeFileSync(path, JSON.stringify(usersFile, null, 2), 'utf8');
    console.log('Data successfully saved to disk');
  } catch (error) {
    console.log('An error has occurred ', error);
  }
}

module.exports = { read, write }