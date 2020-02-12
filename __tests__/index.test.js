import path from 'path';
import fs from 'fs';
import genDiff from '..';


const getFixturePath = (filename) => path.join(__dirname, '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

describe('.json', () => {
  it('.json test', () => {
    const before = getFixturePath('before.json');
    const after = getFixturePath('after.json');
    const result = readFile('result');
    expect(genDiff(before, after)).toBe(result);
  });
  it('.yaml test', () => {
    const before = getFixturePath('before.yml');
    const after = getFixturePath('after.yml');
    const result = readFile('result');
    expect(genDiff(before, after)).toBe(result);
  });
  it('.ini test', () => {
    const before = getFixturePath('before.ini');
    const after = getFixturePath('after.ini');
    const result = readFile('result');
    expect(genDiff(before, after)).toBe(result);
  });
});
