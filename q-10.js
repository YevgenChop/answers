/* question:
If a <div/> has no margin or other styling and a <p/> tag inside of it has a margin top of some kind, the margin from the <p/> tag will show up on the div instead 
(the margin will show above the div not inside of it), why is this? 
What are the different things that can be done to prevent it?

answer:
I assume that this is due to margin rules. But this can be fixed if the <div> is given at least 1px padding. 
Then the block will occupy the entire height including margin
*/
