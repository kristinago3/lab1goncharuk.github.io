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
﻿function $() 
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

var t;
var r1= 0;
var g1= 255;
var 1b= 0;
function f()
	{	
		var e = document.getElementById('1b');
		e.style.right=(parseInt(e.style.right)-30)+'px';
		if(parseInt(e.style.right) <=0)
			{
				s();
			} 
		g1 = g1-6;
		
	}

function r()
	{
		var x = document.getElementById('1b');
		x.style.right = "900px";
		t = setInterval('f()',100);
	}
function s()
	{
		clearInterval(t);
	}

