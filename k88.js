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

function f1()
{x=parseFloat(document.getElementById('tx1').value);
N=parseInt(document.getElementById('tx2').value);
 S=x;
 p1=1;
 p2=1;
for(i=1;i<=N;i++)
{p1=p1*(2*i+1);
p2=p2*(-1);
S=S+((Math.pow(x,p1)*p2*Math.pow(p2,i))/p1);
}
document.getElementById('tx3').value=''+S;
}
