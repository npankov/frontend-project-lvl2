import plainRender from './plainRender';
import nestedRender from './nestedRender';
import jsonRender from './jsonRender';

const render = (data, format) => {
  switch (format) {
    case 'plain':
      return plainRender(data);
    case 'nested':
      return nestedRender(data);
    case 'json':
      return jsonRender(data);
    default:
      throw new Error(`Unknown output format: '${format}'!`);
  }
};

export default render;
