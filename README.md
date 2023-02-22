# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @eliza504/lotide`

**Require it:**

`const _ = require('@eliza504/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `const assertArraysEqual = function(actual, expected)` : function takes in two arrays and outputs whether they are equal or not
* `const assertEqual = function(actual, expected)`: function takes in two values and outputs if they are equal or not
* `const assertObjectsEqual = function(actual, expected)`: function takes in two objects and outputs whether they are equal or not
* `const countLetters = function(sentence)`: countLetters takes in function and outputs the number of occurences for each letter within it
* `const countOnly = function(allItems, itemsToCount)`: function takes in an array of items and returns a count of occurences for all the items that were called in the object
* `const eqArrays = function(a, b)`: function takes in two arrays and outputs whether they are equal or not
* `const eqObjects = function(object1, object2)`: function takes in two objects and outputs whether they are equal or not
* `const findKey = function(object, callback)`: function takes in an object and outputs the first key that meets the criteria of the callback function
* `const findKeyByValue = function(object, value)`: function takes an object and a value and outputs first key that matches the said value
* `const flatten = function(fullArray)`: function takes in an array that contains nested arrays and returns a flattened versions
* `const head = function(array)`: function returns first index of a given array
* `const letterPositions = function (sentence)`: function takes in a sentence and outputs and object with the positions of each letter
* `const map = function(array, callback)`: function takes in an array and outputs the results of each index passing through callback function
* `const middle = function(array)`: function that returns middle of a given array
* `const tail = function(array)`: function returns the last index for a given array
* `const takeUntil = function(array, callback)`: function that will take an array and loop through it until output matches callback function
* `const without = function(itemsArray, itemsToRemove)`: function takes in an array and outputs array after removing selected items
