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
 document.getElementById("tx2").value=document.getElementById("tx2").value+y;
}

function f2()
{
x=parseInt( document.getElementById('tx1').value);
today.setTime(x);
 document.getElementById('tx3').value=today;
 document.getElementById('tx1').value='';

}
 
function f3()

{ y=parseInt( document.getElementById('tx2').value);
today.setTime(y);
 document.getElementById('tx4').value=today;
 document.getElementById('tx2').value='';

}
function f4()
{время1=parseFloat(document.getElementById('tx3').value);
время2=parseFloat(document.getElementById('tx4').value);

if(время1>время2)
{document.getElementById('tx5').value='время1='+время1;
}

else 
{document.getElementById('tx5').value='время2='+время2;

}
}

function f5()
{var today=newDate();
 t=today.getTime()-birthday.getDay();
 document.getElementById('tx7'=parseInt(t));
}

function f6()
{var today=newDate();
 t=today.getTime()-birthday.getDay();
 document.getElementById('tx8'=parseInt(t));
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

