import path from 'path';
import fs from 'fs';
import genDiff from '..';

const getFixturePath = (filename) => path.join(__dirname, '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const cases = [
  [getFixturePath('beforeNested.json'), getFixturePath('afterNested.json'), 'nested', readFile('resultNested')],
  [getFixturePath('beforeNested.yml'), getFixturePath('afterNested.yml'), 'plain', readFile('resultPlain')],
  [getFixturePath('beforeNested.ini'), getFixturePath('afterNested.ini'), 'nested', readFile('resultNested')],
  [getFixturePath('beforeNested.ini'), getFixturePath('afterNested.ini'), 'plain', readFile('resultPlain')],
];

describe('Comparing files tests', () => {
  test.each(cases)('test %#', (before, after, format, result) => {
    expect(genDiff(before, after, format)).toBe(result);
  });
});
