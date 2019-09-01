import _ from 'lodash';

const getData = values => {
  let dataVal = values;
  let data = _(dataVal)
                  .keys()
                  .map( dataKey => {
                    let cloned = _.clone(dataVal[dataKey]);
                    cloned.key = dataKey;
                    return cloned;
                  })
                  .value();
  return data;
}

const byPropKey = ( propertyName, value ) => () => ({
  [propertyName]: value
});

/**
 * randomVal
 * generate random value between min max value
 * @author willi <https://github.com/willi-dev>
 * @param {*} min 
 * @param {*} max 
 */
const randomVal = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export {
  getData,
  byPropKey,
  randomVal
};
