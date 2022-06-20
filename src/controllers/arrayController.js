const express = require('express');
const { binarySearch, bubbleSort } = require('../utils/utils');
const { isNumeric } = require('../utils/validation');
const utils = require('../utils/utils');

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

exports.bSearch = (req, res) => {
  const { items, filterElement } = req.body;
  if (!items || !filterElement) {
    throw new Error('data is required!');
  }
  const index = utils.binarySearch(items, filterElement);
  return res.status(200).send({
    result : index!=-1?`${filterElement} found in ${index} position`:'Not Found!'
  })
};

exports.BubbleSort = (req,res)=>{
  const items= req.body.items;
  if(!items) 
    throw new Error ("data is required!")
  try{
    const sortedItem = bubbleSort(items);
    return res.status(200).send(sortedItem);
  }
  catch(e){
    throw new Error(e.message);
  }
}

exports.Fibonacci=(req,res)=>{
  const {firstElement,secondElement,n}=req.body;
  if(!firstElement || !secondElement) throw new Error("data is required!")

  try{
    const fibSeries = this.fibonacci(firstElement,secondElement,n);
    return res.status(200).send(fibSeries);
  }
  catch(e){
    throw new Error(e.message);
  }
}

exports.countDigits=(req,res)=>{
  const number = req.body.num;
  if(!number) throw new Error("data required!")
  try{
    const digit = this.Count(number);
    return res.status(200).send(digit)
  }
  catch(e){
    throw new Error(e.message);
  }
}
