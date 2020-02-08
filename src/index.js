import fs from 'fs';
import _ from 'lodash';

const genDiff = (fileFirst, fileSecond) => {
  const objFirst = JSON.parse(fs.readFileSync(fileFirst));
  const objSecond = JSON.parse(fs.readFileSync(fileSecond));
  const result = [];

  for (const key in objFirst) {
    if (_.has(objSecond, key)) {
      if (objSecond[key] === objFirst[key]) {
        result.push(`${key} : ${objFirst[key]}`);
      } 
      else {
        result.push(`+ ${key} : ${objSecond[key]}`);
        result.push(`- ${key} : ${objFirst[key]}`);
      }
    } 
    else {
      result.push(`- ${key} : ${objFirst[key]}`);
    }
  }

  for (const key in objSecond) {
    if (!_.has(objFirst, key)) {
      result.push(`+ ${key} : ${objSecond[key]}`);
    }
  }

  const resultString = `{\n${result.join('\n')}\n}`;
  return resultString;
};

export default genDiff;
