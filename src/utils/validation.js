const { type } = require("express/lib/response");

exports.isNumeric = (str) => {
  if(!str) {
    throw new Error('field should not be blank')
  }
  try{
    const getStringedNumber = str.toString();
    const reg = /^\d+$/;
    return reg.test(getStringedNumber);
  }
  catch(e)
  {
    throw new Error(e.message);
  }
};

/**
 *
 * @param {array} array accepts array
 * return true if Empty, neither false
 */
exports.isEmptyArray = (array) => {
  if(!array)
  {
    throw new Error("array is required");
  }
  try{
    if(Array.isArray(array))
    {
      return array.length === 0?true:false;
    } 
  }
  catch(e){
    throw new Error(e.message);
  }

};

/**
 * @param {element} element accepts any object
 * check isString or not
 * return true if string, neither false
 */
exports.isString = (element) => {
  if(!element){
    return false;
  }
  try{
    if (typeof element === 'string')
      return true
    return false
  }
  catch(e){
    throw new Error(e.message);
  }
  

};

exports.isNumber = (element) => {
  if(typeof element === 'number')
    return true 
  return false

};
