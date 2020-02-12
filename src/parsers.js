import fs from 'fs';
import yaml from 'js-yaml';
import path from 'path';


const parser = (pathTofile) => {
  const format = path.extname(pathTofile);
  const data = fs.readFileSync(pathTofile);

  let parse;
  if (format === '.json') {
    parse = JSON.parse;
  } else if (format === '.yml') {
    parse = yaml.safeLoad;
  }

  return parse(data);
};

export default parser;
