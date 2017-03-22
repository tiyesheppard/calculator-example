$(document).ready(function () {
	$("#submit").on("click", function (e) {
		e.preventDefault();


		var operation = $("input[name='operation']:checked").val();
		//* select the input or radio button with attribute name operation that is checked *//

		var number1 = parseInt($("#number1").val());
		var number2 = parseInt($("#number2").val());
		var number3 = parseInt($("#number3").val());

		if (operation == "add") {
			var sum = addition(number1, number2, number3);
		}

		if (operation == "multiply") {
			var sum = multiply(number1, number2, number3);
		}

		if (operation == "subtract") {
			var sum = subtract(number1, number2, number3);
		}

		if (operation == "divide") {
			var sum = divide(number1, number2, number3);
		}
		//* fire functions based on value set in html... functions defined below*//



		$("#sum").val(sum);

	});
});

function addition(number1, number2, number3) {
	var sum = number1 + number2 + number3;
	return sum;
}

function multiply(number1, number2, number3) {
	var sum = number1 * number2 * number3;
	return sum;
}

function subtract(number1, number2, number3) {
	var sum = number1 - number2 - number3;
	return sum;
}

function divide(number1, number2, number3) {
	var sum = number1 / number2 / number3;
	return sum;
}
