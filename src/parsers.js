import fs from 'fs';
import yaml from 'js-yaml';
import ini from 'ini';
import path from 'path';

const parse = (pathTofile) => {
  const format = path.extname(pathTofile);
  const data = fs.readFileSync(pathTofile, 'utf-8');

  switch (format) {
    case '.json':
      return JSON.parse(data);
    case '.yml':
      return yaml.safeLoad(data);
    case '.ini':
      return ini.parse(data);
    default:
      throw new Error(`Unknown format file: '${format}'!`);
  }
};

export default parse;
