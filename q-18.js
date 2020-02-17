/* question:
If you have an array of values in a stream and you wish to pipe it such that it will emit the arrays values individually, one by one and wait for them all to be completed before processing another array, how would you do this?  
Please provide a code example.
*/

//use operator from

import { from } from 'rxjs';
const array = [10, 20, 30];
const result = from(array);
result.subscribe(x => console.log(x));
