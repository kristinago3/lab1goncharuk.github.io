﻿/*function $() 
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
{document.getElementById("tx1").value=document.getElementById("tx1").value+x;
 document.getElementById("tx2").value=document.getElementById("tx2").value+x;}

function f2()
{x=parseInt( document.getElementById('tx1').value);
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


function f1()
{document.getElementById('tx7').value=today.getDay();
a=parseFloat(document.getElementById('tx1').value);
switch(a)
{
case 1:
document.getElementById('tx7').value='Понедельник'
break;
case 2:
document.getElementById('tx7').value='Вторник'
break;
case 3:
document.getElementById('tx7').value='Среда'
break;
case 4:
document.getElementById('tx7').value='Четверг'
break;
case 5:
document.getElementById('tx7').value='Пятница'
break;
case 6:
document.getElementById('tx7').value='Суббота'
break;
case 0:
document.getElementById('tx7').value='Воскресенье'
break;
}
}
