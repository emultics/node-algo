const { type } = require("express/lib/response");

exports.isNumeric = (str) => {
  //TODO check string is numeric or not;
  if(!str) {
    throw new Error('field should not be blank')
  }
  const getStringedNumber = str.toString();
  const reg = /^\d+$/;
  return reg.test(getStringedNumber);
};

/**
 *
 * @param {array} array accepts array
 * return true if Empty, neither false
 */
exports.isEmptyArray = (array) => {
  //TODO check array is empty or not
  if(!array)
  {
    throw new Error("array is required");
  }
  if(Array.isArray(array))
  {
    return array.length === 0?true:false;
  } 
  else throw new Error("its not an array");

};

/**
 * @param {element} element accepts any object
 * check isString or not
 * return true if string, neither false
 */
exports.isString = (element) => {
  //TODO
  if(!element){
    return false;
  }
  if (typeof element === 'string')
    return true
  return false

};

exports.isNumber = (element) => {
  if(typeof element === 'number')
    return true 
  return false

};
