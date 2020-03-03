import plainRender from './plainRender';
import nestedRender from './nestedRender';

const renders = (data, format) => {
  let render;

  if (format === 'plain') {
    render = plainRender;
  } else if (format === 'nested') {
    render = nestedRender;
  }

  return render(data);
};

export default renders;
