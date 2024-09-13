const fs = require('fs');

const data = {
  name: "karan",
  age: 21
};

fs.writeFileSync('data.json', JSON.stringify(data, null, 2));
const content = fs.readFileSync('data.json', 'utf8');
console.log(JSON.parse(content));