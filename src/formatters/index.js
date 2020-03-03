import plainRender from './plainRender';
import nestedRender from './nestedRender';

const renders = (data, format) => {
  let render;

  if (format === 'plain') {
    render = plainRender(data);
  }
  if (format === 'nested') {
    render = nestedRender(data);
  }

  return render;
};

export default renders;
