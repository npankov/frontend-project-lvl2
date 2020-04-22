import buildAst from './buildAst';
import parse from './parsers';
import render from './formatters';

const genDiff = (pathToFileFirst, pathToFileSecond, format) => {
  const objFirst = parse(pathToFileFirst);
  const objSecond = parse(pathToFileSecond);
  const data = buildAst(objFirst, objSecond);
  const rendering = render(data, format);
  return rendering;
};

export default genDiff;
