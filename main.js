import halfOf from "./lib.js";
import { multiply } from "./lib.js";
import doSomething from "./doSomething.js";
import { flag, touch } from './validator.js';

console.log(halfOf(84));
console.log(multiply(21, 2));

doSomething();

console.log(flag);
touch();
console.log(flag);
