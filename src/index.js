import _ from 'lodash';
import buildAst from '..';
import parser from './parsers';

const genDiff = (fileFirst, fileSecond) => {
  const objFirst = parser(fileFirst);
  const objSecond = parser(fileSecond);
  const data = buildAst(objFirst, objSecond);

  const renderObj = (obj) => `{${_.keys(obj).map((key) => `\n       ${key}: ${obj[key]}`).join('')}\n   }`;

  const renderValue = (value) => (_.isObject(value) ? renderObj(value) : value);

  const iter = (data) => {
    const result = data.reduce((acc, el) => {
      const {
        type, key, value, valueAfter, children,
      } = el;

      if (type === 'removed') {
        acc.push(` - ${key}: ${renderValue(value)}\n`);
      }

      if (type === 'added') {
        acc.push(` + ${key}: ${renderValue(value)}\n`);
      }

      if (type === 'nested') {
        acc.push(`${key}: {\n${iter(children)}}\n`);
      }
      if (type === 'equal') {
        acc.push(`   ${key}: ${renderValue(value)}\n`);
      }

      if (type === 'modified') {
        acc.push(` + ${key}: ${renderValue(valueAfter)}\n`);
        acc.push(` - ${key}: ${renderValue(value)}\n`);
      }

      return acc;
    }, []);

    return result.join('');
  };

  return iter(data);
};

export default genDiff;
