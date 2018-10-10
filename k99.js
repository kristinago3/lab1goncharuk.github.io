/*﻿function $() 
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
{N=parseFloat(document.getElementById('tt1').value);
 K=parseFloat(document.getElementById('tt2').value);
 S=1;
 
                     for(i=2;i<=N;i++) 
		       {a=i;
                           for(j=2;j<=K;j++)
                       {a=a*i;
                        S=S+a;}
		  	document.getElementById('tt3').value=S;
                                
		             }

}
function f2()
{
	A=parseFloat(document.getElementById('tx1').value);
	B=parseFloat(document.getElementById('tx2').value);
	result='';
	for(var i=A; i<=B; i++)
	{
		for(var j=1; j<= i; j++)
			result=result+i;
	}
	document.getElementById('tx3').value=result;
}

