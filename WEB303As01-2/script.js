/*
	WEB 303 Assignment 1 - jQuery
	Pushkar Kapil
*/

$(document).ready(function()
{
$("#yearly-salary").keyup(function()
{
let val1 = document.getElementById("yearly-salary").value;

let val2 = document.getElementById("percent").value;
if(isNaN(val1) || isNaN(val2))
{
	alert("please enter number only");
}
else if(val1<0 || val2<0)
{
	alert("please enter +ve values")
}
else
{
let val3 = val1*val2/100;
document.getElementById("amount").textContent ="$"+val3.toFixed(2);
}
});

$("#percent").keyup(function()
{
let val1 = document.getElementById("yearly-salary").value;

let val2 = document.getElementById("percent").value;
if(isNaN(val1) || isNaN(val2))
{
	alert("please enter number only");
}
else if(val1<0 || val2<0)
{
	alert("please enter +ve values")
}
else
{
let val3 = val1*val2/100;
document.getElementById("amount").textContent ="$"+val3.toFixed(2);;
}
});
});