import plainRender from './plainRender';
import nestedRender from './nestedRender';
import jsonRender from './jsonRender';

const renders = (data, format) => {
  if (format === 'plain') {
    return plainRender(data);
  }
  if (format === 'nested') {
    return nestedRender(data);
  }
  if (format === 'json') {
    return jsonRender(data);
  }
  throw new Error('wrond format output! you need to choose nested/plain/json');
};

export default renders;
