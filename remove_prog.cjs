const fs = require('fs');
const path = 'src/data/programsData.ts';
let data = fs.readFileSync(path, 'utf8');

const regex = /\{\s+id: "prog-009",[\s\S]*?tags: \["Kids", "Robotics", "Coding", "STEM", "Education"\]\s+\},/;

data = data.replace(regex, '');

fs.writeFileSync(path, data, 'utf8');
console.log('Removed prog-009');
