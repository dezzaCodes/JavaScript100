var calculator = document.querySelector('.calculator')
var display = document.querySelector('#display')
var buttons = document.querySelectorAll('.btn')
var eql = document.querySelector('.btn-eql')
var del = document.querySelector('.btn-del')
var clr = document.querySelector('.btn-clr')

var trim = function(e) {
	var trimmed = display.value.slice(0, -1);
	console.log(trimmed)
	display.value = trimmed;
}

buttons.forEach(function(button) {
	button.addEventListener('click', function(e) {
		var value = e.target.dataset.num;
		console.log(value);
		display.value += value
	})

	eql.addEventListener('click', function(e) {
		var answer = eval(display.value);
		display.value = parseInt(answer);
  	})

  	clr.addEventListener('click', function(e) {
  		display.value = '';
  	})

  	del.addEventListener('click', trim);
})
