import _ from 'lodash';
import buildAst from './buildAst';
import parser from './parsers';

const genDiff = (fileFirst, fileSecond) => {
  const objFirst = parser(fileFirst);
  const objSecond = parser(fileSecond);
  const data = buildAst(objFirst, objSecond);

  const renderObj = (obj, offset, space) => {
    const keys = _.keys(obj);
    return `{${keys.map((key) => `\n${offset}${space}${space}${key}: ${obj[key]}`)}\n${offset}}`;
  };

  const renderValue = (value, offset, space) => {
    return _.isObject(value) ? renderObj(value, (offset + space + space), space) : value;
  };

  const spaceCount = 2;

  const iter = (data, offset = '', space = ' '.repeat(spaceCount)) => {
    const result = data.reduce((acc, el) => {
      const {
        type, key, value, valueAfter, children,
      } = el;

      if (type === 'added') {
        acc.push(`${offset}${space}+${space.slice(1)}${key}: ${renderValue(value, offset, space)}\n`);
      }

      if (type === 'removed') {
        acc.push(`${offset}${space}-${space.slice(1)}${key}: ${renderValue(value, offset, space)}\n`);
      }

      if (type === 'nested') {
        acc.push(`${offset}${space}${space}${key}: {\n${iter(children, (offset + space + space), space)}${offset}${space}${space}}\n`);
      }
      if (type === 'equal') {
        acc.push(`${offset}${space}${space}${key}: ${renderValue(value, offset, space)}\n`);
      }

      if (type === 'modified') {
        acc.push(`${offset}${space}+${space.slice(1)}${key}: ${renderValue(valueAfter, offset, space)}\n`);
        acc.push(`${offset}${space}-${space.slice(1)}${key}: ${renderValue(value, offset, space)}\n`);
      }

      return acc;
    }, []);

    return result.join('');
  };

  return `{\n${iter(data)}}`;
};

export default genDiff;
