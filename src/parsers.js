import fs from 'fs';
import yaml from 'js-yaml';
import ini from 'ini';
import path from 'path';

const parser = (pathTofile) => {
  const format = path.extname(pathTofile);
  const data = fs.readFileSync(pathTofile, 'utf-8');

  if (format === '.json') {
    return JSON.parse(data);
  }
  if (format === '.yml') {
    return yaml.safeLoad(data);
  }
  if (format === '.ini') {
    return ini.parse(data);
  }
  throw new Error('wrond format file! you need to choose .json/.yml/.ini');
};

export default parser;
