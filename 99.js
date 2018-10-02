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


function f1()
{N=parseFloat($('tt1').value);
 K=parseFloat($('tt2').value);
 Sum=1;
 
                     for(i=2;i<=N;i++) 
		       {a=i;
                           for(j=2;j<=K;j++)
                       {a=a*i;
                        Sum=Sum+a;}
		  	$('tt3').value=Sum;
                                
		             }

}
function f2()
{
	A=parseFloat($('tx1').value);
	B=parseFloat($('tx2').value);
	result='';
	for(var i=A; i<=B; i++)
	{
		for(var j=1; j<= i; j++)
			result=result+i;
	}
	$('tx4').value=result;
}

