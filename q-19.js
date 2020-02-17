/* question:
If you have a stream that receives individual values and would like to pipe it such that it builds an array out of these values, emitting the updated array each time a new value is added to it, how would you do this? 
Please provide a code example.
*/

//use toArray operator

import { interval } from 'rxjs';
import { toArray, take, tap } from 'rxjs/operators';

interval(100)
  .pipe(
    take(10),
    toArray()
  )
  .subscribe(console.log);
