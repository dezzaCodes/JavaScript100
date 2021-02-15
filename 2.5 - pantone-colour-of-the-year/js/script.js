(function() {
const colours = [
	{year: 2021, hex: "F5DF4D", name: "Illuminating"},
	{year: 2021, hex: "939597", name: "Ultimate Gray"},
	{year: 2020, hex: "0F4C81", name: "Classic Blue"},
	{year: 2019, hex: "FF6F61", name: "Living Coral"},
	{year: 2018, hex: "5F4B8B", name: "Ultra Violet"},
	{year: 2017, hex: "88B04B", name: "Greenery"},
	{year: 2016, hex: "92A8D1", name: "Serenity"},
	{year: 2016, hex: "F7CAC9", name: "Rose Quartz"},
	{year: 2015, hex: "955251", name: "Marsala"},
	{year: 2014, hex: "B163A3", name: "Radiant Orchid"},
	{year: 2013, hex: "009473", name: "Emerald"},
	{year: 2012, hex: "DD4124", name: "Tangerine Tango"},
	{year: 2011, hex: "D94F70", name: "Honeysuckle"},
	{year: 2010, hex: "45B5AA", name: "Turquoise"},
	{year: 2009, hex: "F0C05A", name: "Mimosa"},
	{year: 2008, hex: "5A5B9F", name: "Blue Iris"},
	{year: 2007, hex: "9B1B30", name: "Chili Pepper"},
	{year: 2006, hex: "DECDBE", name: "Sand Dollar"},
	{year: 2005, hex: "53B0AE", name: "Blue Turquoise"},
	{year: 2004, hex: "E2583E", name: "Tigerlily"},
	{year: 2003, hex: "7BC4C4", name: "Aqua Sky"},
	{year: 2002, hex: "BF1932", name: "True Red"},
	{year: 2001, hex: "C74375", name: "Fuchsia Rose"},
	{year: 2000, hex: "9BB7D4", name: "Cerulean"},
]

const form = document.querySelector('#form')
form.addEventListener('submit', function(e) {

	e.preventDefault()

	const year = document.querySelector('#year')
	const text = document.querySelector('.message-content')
	const feedback = document.querySelector('.feedback')
	var body = document.querySelector('body')
	var hex = ["", ""];
	var name = ["", ""]

	if (year.value.toLowerCase() == 'random') year.value = Math.floor(Math.random() * 21) + 2000

	if (parseInt(year.value) >= 2000 && parseInt(year.value) <= 2021 && year.value.length == 4) {
		var j = 0;
		for (var i = 0; i < colours.length; i++) {
		  if (parseInt(year.value) == colours[i].year) {
			hex[j] = "#" + colours[i].hex
			name[j++] = colours[i].name
		  }
		}

		if (hex[1] == "") hex[1] = hex[0]
		if (name[1] != "") name[0] = name[0] + " & " + name[1]

		body.style.backgroundImage = "linear-gradient(to right," + hex[0] + ", " + hex[0] + " 50%, " + hex[1] + " 50%, " + hex[1] + ")"
		text.textContent = name[0]
	} else {
		year.value = ""
		feedback.classList.add('show')
        setTimeout(function(){
        feedback.classList.remove('show')
        }, 2000)
	}
})
})()


