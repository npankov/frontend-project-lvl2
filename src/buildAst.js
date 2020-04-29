import _ from 'lodash';

const buildAst = (objFirst, objSecond) => {
  const keys = _.union(_.keys(objFirst), _.keys(objSecond));
  return keys.map((key) => {
    if (!_.has(objFirst, key)) {
      return { type: 'added', key, value: objSecond[key] };
    }

    if (!_.has(objSecond, key)) {
      return { type: 'removed', key, value: objFirst[key] };
    }
    
    if (_.isObject(objFirst[key]) && _.isObject(objSecond[key])) {
      return { type: 'nested', key, children: buildAst(objFirst[key], objSecond[key]) };
    }

    if (objFirst[key] !== objSecond[key]) {
      return {
        type: 'modified', key, valueBefore: objFirst[key], valueAfter: objSecond[key],
      };
    }
    return { type: 'equal', key, value: objFirst[key] };
  });
};

export default buildAst;
