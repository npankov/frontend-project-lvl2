import plainRender from './plainRender';
import nestedRender from './nestedRender';
import jsonRender from './jsonRender';

const renders = (data, format) => {
  let render;

  if (format === 'plain') {
    render = plainRender(data);
  }
  if (format === 'nested') {
    render = nestedRender(data);
  }
  if (format === 'json') {
    render = jsonRender(data);
  }

  return render;
};

export default renders;
