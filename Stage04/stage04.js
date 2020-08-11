// DOM References
const showMessageBtn = document.getElementById('btn-show-message')
const nameInput = document.getElementById('input-name')
const messageContainer = document.getElementById('message-container')

// Data
let name = ''
let message = ''

// Actions
function updateData(){
    console.group('[updateData]')

    name = nameInput.value
    message = 'Hello ' + name + ' how are you?'
    
    console.log('name', name)
    console.log('message', message)
    console.groupEnd()
}

function updateMessageContainer(){
    console.log('[updateMessageContainer]')
    messageContainer.innerHTML = message
}

function handleClick(){
    console.log('[handleClick]')
    updateData()
    updateMessageContainer()
}

function init() {
    console.log('[Init]')
    // Bindings
    showMessageBtn.onclick = handleClick
}

// init
init()