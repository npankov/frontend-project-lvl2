import _ from 'lodash';

const plainRender = (data) => {
  const renderValue = (value) => (_.isObject(value) ? '[complex value]' : value);

  const iter = (elements, parent = '') => {
    const result = elements.reduce((acc, el) => {
      const {
        type, key, value, valueAfter, children,
      } = el;

      if (type === 'nested') {
        const newParent = `${parent}${key}.`;
        acc.push(`${iter(children, newParent)}`);
      }

      if (type === 'added') {
        acc.push(`Property '${parent}${key}' was added with value: '${renderValue(value)}'\n`);
      }

      if (type === 'removed') {
        acc.push(`Property '${parent}${key}' was removed\n`);
      }

      if (type === 'modified') {
        acc.push(`Property '${parent}${key}' was modified from '${renderValue(value)}' to '${renderValue(valueAfter)}'\n`);
      }

      if (type === 'equal') {
        acc.push(`Property '${parent}${key}' not changed\n`);
      }

      return acc;
    }, []);

    return result.join('');
  };

  return iter(data).trim();
};

export default plainRender;
