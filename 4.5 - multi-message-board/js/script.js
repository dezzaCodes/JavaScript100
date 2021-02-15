(function() {
const form = document.querySelector('#message-form')
var ans = []

form.addEventListener('submit', function(e){
    e.preventDefault()

    const message = document.querySelector('#message')
    const feedback = document.querySelector('.feedback')
    const messageContent = document.querySelector('.message-content')

    if (message.value === ''){
        feedback.classList.add('show')
        setTimeout(function(){
        feedback.classList.remove('show')
        }, 2000)
    } else {
        ans.push(message.value)
		var send = ''

		messageContent.setAttribute('style', 'white-space: pre;');
		messageContent.innerHTML = ''

        ans.forEach(function(e) {
        	messageContent.textContent = e + "\r\n" + messageContent.textContent
        })

        message.value = ''
    }
})
})()
