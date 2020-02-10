import path from 'path';
import fs from 'fs';
import genDiff from '..';


const getFixturePath = (filename) => path.join(__dirname, '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('test JSON compare', () => {
  const before = getFixturePath('before.json');
  const after = getFixturePath('after.json');
  const result = readFile('result');
  expect(genDiff(before, after)).toBe(result);
});
