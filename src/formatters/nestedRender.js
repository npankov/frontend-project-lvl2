import _ from 'lodash';

const nestedRender = (data) => {
  const renderObj = (obj, offset, tab) => {
    const keys = _.keys(obj);
    return `{${keys.map((key) => `\n${offset}${tab}${tab}${key}: ${obj[key]}`)}\n${offset}}`;
  };

  // eslint-disable-next-line max-len
  const renderValue = (value, offset, tab) => (_.isObject(value) ? renderObj(value, (offset + tab + tab), tab) : value);

  const spaceCount = 2;

  const iter = (elements, offset = '', tab = ' '.repeat(spaceCount)) => {
    const result = elements.reduce((acc, el) => {
      const {
        type, key, value, valueAfter, children,
      } = el;

      if (type === 'added') {
        acc.push(`${offset}${tab}+${tab.slice(1)}${key}: ${renderValue(value, offset, tab)}\n`);
      }

      if (type === 'removed') {
        acc.push(`${offset}${tab}-${tab.slice(1)}${key}: ${renderValue(value, offset, tab)}\n`);
      }

      if (type === 'nested') {
        acc.push(`${offset}${tab}${tab}${key}: {\n${iter(children, (offset + tab + tab), tab)}${offset}${tab}${tab}}\n`);
      }
      if (type === 'equal') {
        acc.push(`${offset}${tab}${tab}${key}: ${renderValue(value, offset, tab)}\n`);
      }

      if (type === 'modified') {
        acc.push(`${offset}${tab}+${tab.slice(1)}${key}: ${renderValue(valueAfter, offset, tab)}\n`);
        acc.push(`${offset}${tab}-${tab.slice(1)}${key}: ${renderValue(value, offset, tab)}\n`);
      }

      return acc;
    }, []);

    return result.join('');
  };

  return `{\n${iter(data)}}`;
};

export default nestedRender;