import buildAst from './buildAst';
import parse from './parsers';
import render from './formatters';
import fs from 'fs';
import path from 'path';

const genDiff = (pathToFileFirst, pathToFileSecond, format) => {
  const formatFirstFile = path.extname(pathToFileFirst);
  const dataFirstFile = fs.readFileSync(pathToFileFirst, 'utf-8');

  const formatSecondFile = path.extname(pathToFileSecond);
  const dataSecondFile = fs.readFileSync(pathToFileSecond, 'utf-8');

  const objFirst = parse(dataFirstFile, formatFirstFile);
  const objSecond = parse(dataSecondFile, formatSecondFile);

  const data = buildAst(objFirst, objSecond);
  const rendering = render(data, format);
  return rendering;
};

export default genDiff;
