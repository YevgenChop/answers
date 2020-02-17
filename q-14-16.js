/* question:

React test step1:

Create a react component that has a <div/> with a border.
Inside this <div/> should be a <span/> that displays the ‘live’ width of the browser window at all times.  Keep in mind that the size of the window could easily be changed by the user and you should reflect this.



React test step2:

Inside the <div/> you created in the previous step, add a text input that, as a number is entered into it, uses that number to set the height of the div itself in pixels, live as you update the text field (keypress not change event).


React test step3:

Add the following code to your project root (same project as in step 2, but add the code in the global / window space):  

    Let divHeight;
    window.setDivHeight = (height) => divHeight = height;

Add a HOC for your div component that allows you to set the height of your <div/> component from the previous steps by calling that external function.

If you do not know what a HOC is or how to create one, that is also fine, just mention that in your answer and instead create a parent component that can still do this (allow you to call that function ‘setDivHeight’ in order to set the height of the div manually.

Bare in mind that when the height of the div is forcefully set like this, the text fields value should also update to reflect this and should still carry on working as normal (user can continue to modify its value).
*/




import React, { useState, useEffect } from 'react';
 
window.setDivHeight = (height) => window.divHeight = height;
 
const withHeightHandler = (ComposedComponent) => (props) => {
 const [height, setHeight] = useState(10);
 
 useEffect(() => {
   const backupFunction = window.setDivHeight;
 
   window.setDivHeight = (height) => {
     setHeight(height);
     backupFunction(height);
   }
 
 }, [])
 return <ComposedComponent {...props} height={height} />
}
 
const BrowserSize = (props) => {
 const [width, setWidth] = useState(window.innerWidth);
 const [height, setHeight] = useState(props.height);
 
 useEffect(() => {
   setHeight(props.height)
 }, [props.height])
 useEffect(() => {
 
   const resize = (event) => {
     setWidth(event.target.innerWidth);
   }
 
   window.addEventListener('resize', resize);
 
   return () => window.removeEventListener('resize', resize);
 }, []);
 
 return (
   <div style={{ height: height + 'px', border: 'solid 2px #ececec' }}>
     <span>
       {width}
     </span>
     <input
       min={0}
       type="number"
       value={height}
       onChange={(e) => setHeight(e.target.value)}
     />
   </div>
 )
}
 
const BrowserStatusWithHandler = withHeightHandler(BrowserSize)
 
function App() {
 return (
   <BrowserStatusWithHandler />
 );
}
 
export default App;


