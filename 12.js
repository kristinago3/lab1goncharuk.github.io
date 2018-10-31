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


function f2()
	{
		var x = parseInt(document.getElementById('In').value);	
		if(0<x<120 )
			{
      		document.getElementById('Result').value='Okay';
   			}
   		else
    		{
   			document.getElementById('Result').value='Fail';
    		}
		
	}
