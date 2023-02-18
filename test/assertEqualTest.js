// test

const assertEqual = require('../assertEqual');

assertEqual("Lighthouse Labs", "Bootcamp"); // => false
assertEqual(1, 1); // => true
assertEqual("Light", "Light"); // => true
assertEqual(1,3); // => false
