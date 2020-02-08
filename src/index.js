import fs from 'fs';
import _ from 'lodash';

const genDiff = (fileFirst, fileSecond) => {
  const objFirst = JSON.parse(fs.readFileSync(fileFirst));
  const objSecond = JSON.parse(fs.readFileSync(fileSecond));
  const result = [];

  const keysValuesObjFirst = Object.entries(objFirst);
  const keysValuesObjSecond = Object.entries(objSecond);

  const mappedFirst = keysValuesObjFirst.map(([key, value]) => {
    if (_.has(objSecond, key)) {
      if (objSecond[key] === value) {
        result.push(`${key} : ${value}`);
      } else {
        result.push(`+ ${key} : ${objSecond[key]}`);
        result.push(`- ${key} : ${value}`);
      }
    } else {
      result.push(`- ${key} : ${value}`);
    }
  });

  const mappedSecond = keysValuesObjSecond.map(([key, value]) => {
    if (!_.has(objFirst, key)) {
      result.push(`+ ${key} : ${value}`);
    }
  });

  const resultString = `{\n${result.join('\n')}\n}`;
  return resultString;
};

export default genDiff;
