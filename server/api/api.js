const fs = require('fs');
const path = require('path');

const ABSENCES_PATH = path.join(__dirname, 'json_files', 'absences.json');
const MEMBERS_PATH = path.join(__dirname, 'json_files', 'members.json');

const readJsonFile = (path) => new Promise((resolve) => fs.readFile(path, 'utf8', (_, data) => resolve(data)))
  .then((data) => JSON.parse(data))
  .then((data) => data.payload);

const members = () => readJsonFile(MEMBERS_PATH);
const absences = () => readJsonFile(ABSENCES_PATH);

module.exports = {members, absences}

