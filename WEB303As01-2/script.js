/*
	WEB 303 Assignment 1 - jQuery
	Pushkar Kapil
*/
$(document).ready(function() { 
	$("fieldset").keyup (function(){
		let salary = $("#yearly-salary").val();
		let percent=$("#percent").val();

		console.log(salary,percent);


		let amount = salary * percent/100;

		$("#amount").text(amount.toFixed(2));



		
});
});