var button = document.getElementById('button')
var body = document.querySelector('body')

body.style.backgroundColor = 'white'
button.addEventListener('click', function(e) {
	e.preventDefault()
	var hex = document.querySelector('#hex')
	body.style.backgroundColor = "#" + hex.value
})