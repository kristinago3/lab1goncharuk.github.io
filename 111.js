function $() 
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


 
function g()
{
if($("sl1").selectedIndex==0)

{alert('ПРИВЕТ,МИР!');$("b4").style.backgroundColor="green";}

if($("sl1").selectedIndex==1)
{alert('ПРИВЕТ,МИР!');$("b4").style.color="blue";}

}

function f()

{alert('ПРИВЕТ,МИР!');$("pic1").src="сова.jpg"}








