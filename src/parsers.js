import yaml from 'js-yaml';
import ini from 'ini';

const parse = (data, extension) => {
  switch (extension) {
    case '.json':
      return JSON.parse(data);
    case '.yml':
      return yaml.safeLoad(data);
    case '.ini':
      return ini.parse(data);
    default:
      throw new Error(`Unknown data format: ${extension}!`);
  }
};

export default parse;
