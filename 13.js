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

var t;
var r1= 0;
var g1= 255;
var b1= 0;
function f()
	{	
		var e = document.getElementById('b1');
		e.style.left=(parseInt(e.style.left)-30)+'px';
		if(parseInt(e.style.left) <=0)
			{
				s();
			} 
		g1 = g1-6;
		color ='rgb('+r1+', '+g1+', '+b1+')';
		e.style.backgroundColor= color;
	}

function r()
	{
		var x = document.getElementById('b1');
		x.style.left = "900px";
		t = setInterval('f()',100);
	}
function s()
	{
		clearInterval(t);
	}

