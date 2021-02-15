//IIFE
(function() {
    const button = document.querySelector('#btn')
    const body = document.querySelector('body')
    const hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
    const value = document.querySelector('#hex-value')

    button.addEventListener('click', function() {
        var hex = '#'

        for (var i = 0 ; i < 6 ; i++){
            const index = Math.floor(Math.random() * hexValues.length)
            hex += hexValues[index]
        }

        value.innerHTML = hex
        body.style.backgroundColor = hex
    })
} )()

/*
CAN ALSO DO IT LIKE THIS
var button = document.querySelector('#btn')
var body = document.querySelector('body')
var hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
var value = document.querySelector('#hex-value')

button.addEventListener('click', changeHex)

function changeHex(){
	var hex = '#'

	for (let i = 0; i < 6; i++){
		const index = Math.floor(Math.random()*hexValues.length)
		hex += hexValues[index]
	}

	value.textContent = hex
	body.style.backgroundColor = hex
} */