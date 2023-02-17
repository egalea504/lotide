// test

// require assertEqual as it tests head.js function
//require head.js as that is the function we want to test

const assertEqual = require('../assertEqual');
const head = require('../head');

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([12,18,"ten"]), 12);