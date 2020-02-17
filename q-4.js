/* question:
What is the difference between ‘myFunctionCall(++foo)’   and  ‘myFunctionCall(foo++)’

answer:
The difference is in using the unary operator ++.
In the first case, the foo value will be increased first and then already increased foo value will be passed to the function. 
In the second case, the function will be passed the value foo, and then increased by 1
*/
