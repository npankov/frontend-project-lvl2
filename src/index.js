import buildAst from './buildAst';
import parser from './parsers';
import renders from './formatters/index';

const genDiff = (fileFirst, fileSecond, format) => {
  const objFirst = parser(fileFirst);
  const objSecond = parser(fileSecond);
  const data = buildAst(objFirst, objSecond);
  const render = renders(data, format);
  return render;
};

export default genDiff;
