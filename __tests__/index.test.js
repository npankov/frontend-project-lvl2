import path from 'path';
import fs from 'fs';
import genDiff from '..';

describe('Compare files tests', () => {
  const getFixturePath = (filename) => path.join(__dirname, '__fixtures__', filename);
  const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');
  test.each([
    [getFixturePath('beforeNested.json'), getFixturePath('afterNested.json'), 'nested', readFile('resultNested')],
    [getFixturePath('beforeNested.ini'), getFixturePath('afterNested.ini'), 'plain', readFile('resultPlain')],
    [getFixturePath('beforeNested.yml'), getFixturePath('afterNested.yml'), 'json', readFile('resultJson')],
  ])('test %#', (before, after, format, result) => {
    expect(genDiff(before, after, format)).toBe(result);
  });
});
