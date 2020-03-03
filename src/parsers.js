import fs from 'fs';
import yaml from 'js-yaml';
import ini from 'ini';
import path from 'path';

const parser = (pathTofile) => {
  const format = path.extname(pathTofile);
  const data = fs.readFileSync(pathTofile, 'utf-8');

  let parse;
  if (format === '.json') {
    parse = JSON.parse;
  } else if (format === '.yml') {
    parse = yaml.safeLoad;
  } else if (format === '.ini') {
    parse = ini.parse;
  }

  return parse(data);
};

export default parser;
