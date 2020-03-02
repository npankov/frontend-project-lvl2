import path from 'path';
import fs from 'fs';
import genDiff from '..';

const getFixturePath = (filename) => path.join(__dirname, '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const cases = [
  [getFixturePath('before.json'), getFixturePath('after.json'), readFile('result')],
  [getFixturePath('before.yml'), getFixturePath('after.yml'), readFile('result')],
  [getFixturePath('before.ini'), getFixturePath('after.ini'), readFile('result')],
  [getFixturePath('beforeNested.json'), getFixturePath('afterNested.json'), readFile('resultNested')],
  [getFixturePath('beforeNested.yml'), getFixturePath('afterNested.yml'), readFile('resultNested')],
  [getFixturePath('beforeNested.ini'), getFixturePath('afterNested.ini'), readFile('resultNested')],
];

describe('Comparing files tests', () => {
  test.each(cases)(
    ('test %s'),
    (before, after, result) => {
      expect(genDiff(before, after)).toBe(result);
    },
  );
});


// describe('Comparing files tests', () => {
//   it('.json test', () => {
//     const before = getFixturePath('before.json');
//     const after = getFixturePath('after.json');
//     const result = readFile('result');
//     expect(genDiff(before, after)).toBe(result);
//   });
//   it('.yaml test', () => {
//     const before = getFixturePath('before.yml');
//     const after = getFixturePath('after.yml');
//     const result = readFile('result');
//     expect(genDiff(before, after)).toBe(result);
//   });
//   it('.ini test', () => {
//     const before = getFixturePath('before.ini');
//     const after = getFixturePath('after.ini');
//     const result = readFile('result');
//     expect(genDiff(before, after)).toBe(result);
//   });
// });
