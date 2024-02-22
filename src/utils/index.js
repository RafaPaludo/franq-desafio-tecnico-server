const fs = require('node:fs')

function read (path) {
  return JSON.parse(fs.readFileSync(path, 'utf-8'))
}

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