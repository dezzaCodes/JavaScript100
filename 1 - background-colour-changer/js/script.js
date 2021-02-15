var button = document.getElementById('button')
var body = document.querySelector('body')

const colours = ['red', 'orange', 'yellow', 'green', 'blue', 'pink', 'purple']

body.style.backgroundColor = 'black'
button.addEventListener('click', function() {
	var colourIndex = parseInt(Math.random() * colours.length % 11)
body.style.backgroundColor = colours[colourIndex]
})