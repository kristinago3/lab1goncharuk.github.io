/*function $() 
{ var elements = new Array(); 
for (var i = 0; i < arguments.length; i++) 
{ var element = arguments[i]; 
if (typeof element == 'string') 
element = document.getElementById(element); 
if (arguments.length == 1) 
return element; 
elements.push(element); 
} 
return elements; } 
*/

function f(str) 
{
   for (var i = 0; i < str.length; i++)
      if (" " != str.charAt(i))
          return Fail;
      return Okay;
}
