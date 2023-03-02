let expression = '';

function appendValue(value) {
	expression += value;
	document.getElementById('display').value = expression;
}

function clearDisplay() {
	expression = '';
	document.getElementById('display').value = expression;
}

function backspace() {
	expression = expression.slice(0, -1);
	document.getElementById('display').value = expression;
}

function calculateResult() {
	try {
		expression = eval(expression).toFixed(2);
		document.getElementById('display').value = expression;
	} catch (error) {
		alert('Invalid expression');
	}
}
