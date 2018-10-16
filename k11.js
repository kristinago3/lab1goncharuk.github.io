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

var today = new Date();
function f(x)
{
document.getElementById("tx1").value=document.getElementById("tx1").value+x;
}


function f1()
{
('tx').value=today.getDay();
b=parseFloat(document.getElementById('tx').value);
switch(a)
{
case 1:
document.getElementById('tx').value='Понедельник'
break;
case 2:
document.getElementById('tx').value='Вторник'
break;
case 3:
document.getElementById('tx').value='Среда'
break;
case 4:
document.getElementById('tx').value='Четверг'
break;
case 5:
document.getElementById('tx').value='Пятница'
break;
case 6:
document.getElementById('tx').value='Суббота'
break;
case 0:
document.getElementById('tx').value='Воскресенье'
break;
}
}


