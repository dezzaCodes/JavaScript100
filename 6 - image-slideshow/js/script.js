(function() {
  	const pictures = [
    	"group.JPG",
    	"DSC_1321.JPG",
    	"IMG_3171.JPG",
    	"group pic3.JPG"
  	];

  	//select both left and right button. Add event listeners
  	const buttons = document.querySelectorAll('.btn')
  	const imageDIV = document.querySelector('.img-container')
  	let counter = 0

	buttons.forEach(function(button){
		button.addEventListener('click', function(e){
			if (button.classList.contains('btn-left')){
				counter--
				if(counter < 0){
					counter = pictures.length -1
				}
			} else if (button.classList.contains('btn-right')){
				counter++
				if(counter > pictures.length -1){
					counter = 0
				}
			}
			imageDIV.style.backgroundImage = `url('./img/${pictures[counter]}')`
			imageDIV.style.backgroundSize = 'contain'
		})
	})
})();


// This style is called HTML DOM style