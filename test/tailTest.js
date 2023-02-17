//Tests code below

const assertEqual = require('../assertEqual')
const tail = require('../tail')

//Test 1
const words = ["Yo Yo", "Lighthouse", "Labs"];
// console.log(tail(words));

assertEqual(tail(words).length, 2);
assertEqual(tail(words)[0], "Lighthouse");
assertEqual(tail(words)[1], "Labs");

//Test 2
const trial1 = ["justAString"];
// console.log(tail(trial1));

assertEqual(tail(trial1).length, 0);
assertEqual(tail(trial1)[0], undefined);
assertEqual(tail(trial1)[1], undefined);

//Test 3
const trial2 = [];
// console.log(tail(trial1));

assertEqual(tail(trial2).length, 0);
assertEqual(tail(trial2)[0], undefined);
assertEqual(tail(trial2)[1], undefined);