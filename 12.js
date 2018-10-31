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
{var str=parseFloat(document.getElementById('In').value);
 var a = '1234567890';
 fff=1;
   for (var i = 0; i < str.length; i++)
   {
      x=str.charAt(i);
    if(x.indexOff(a)<0)
     fff=0
   }
 if(fff)
      { document.getElementById('Result').value='Okay' ;  }
   else
      { document.getElementById('Result').value='Fail';   }
 

}
