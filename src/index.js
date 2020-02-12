import _ from 'lodash';
import parser from './parsers';

const genDiff = (fileFirst, fileSecond) => {
  const objFirst = parser(fileFirst);
  const objSecond = parser(fileSecond);

  const keysValuesObjFirst = Object.entries(objFirst);
  const keysValuesObjSecond = Object.entries(objSecond);

  const reducedFirst = keysValuesObjFirst.reduce((acc, [key, value]) => {
    if (_.has(objSecond, key)) {
      if (objSecond[key] === value) {
        acc.push(`${key} : ${value}`);
      } else {
        acc.push(`+ ${key} : ${objSecond[key]}`);
        acc.push(`- ${key} : ${value}`);
      }
    } else {
      acc.push(`- ${key} : ${value}`);
    }
    return acc;
  }, []);

  const reducedSecond = keysValuesObjSecond.reduce((acc, [key, value]) => {
    if (!_.has(objFirst, key)) {
      acc.push(`+ ${key} : ${value}`);
    }
    return acc;
  }, []);

  const resultString = `{\n${reducedFirst.join('\n')}\n${reducedSecond.join('\n')}\n}`;
  return resultString;
};

export default genDiff;
