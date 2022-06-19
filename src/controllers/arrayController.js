const express = require('express');
const { isNumeric } = require('../utils/validation');

/**
 * @param {*} req request of rest, instance of express
 * @param {*} res response
 * example queryPrams:
 * ?number=2345005
 * output:
 * {
 * result: 23450-05
 * }
 */
exports.getDashedNumber = (req, res) => {
  let element = req.query.number;
  try {
    if (!element) {
      throw new Error('number required!');
    }
    //check element is string or not, is not string but numeric convert to string
    element = element instanceof String ? element : element.toString();
    if (!isNumeric(element)) throw new Error('input should be numeric');

    //TODO
    let result = [element[0]];
    for (let i = 1; i < element.length; i++) {
      if (element[i - 1] % 2 === 0 && element[i] % 2 === 0) {
        result.push('-', element[i]);
      } else result.push(element[i]);
    }

    res.status(200).send({
      result: result.join(''),
    });
  } catch (e) {
    return res.status(500).send({
      message: e.message,
    });
  }
};

//binary search
//body:
/**
 * {
    "items": [1,2,4,6,7,9,10],
    "filterElement":4
*}
* need to sort
* need to implement binary search
 */

exports.binarySearch = (req, res) => {
  const {items,filterElement} = req.body;
  if(!items || !filterElement){
    throw new Error("data is required!")
  }
  const n = items.length;
  function Search(items,low,n,filterElement){
    const middleElement = n / 2;
    if(filterElement === items[middleElement]){
        console.log(found);
    }
    else if(filterElement < items[middleElement]){
      return Search(items,low,middleElement-1,filterElement)
    }
    return Search(items,middleElement+1,n,filterElement)
  }
};
