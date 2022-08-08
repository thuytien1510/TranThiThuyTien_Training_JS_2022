let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let chatA = id('chat-left__content'),
    chatB = id('chat-right__content'),
    messageA = id('input-left'),
    messageB = id('input-right'),
    sendA = id('btn-send-left'),
    sendB = id('btn-send-right'),
    resetA = classes('btn-reset')[0],
    resetB = classes('btn-reset')[1],
    fromB = classes('content-left')[0],
    fromA = classes('content-left')[1],
    toB = classes('content-left')[0],
    toA = classes('content-left')[1],
    boldA = classes('btn-bold')[0],
    italicA = classes('btn-italic')[0],
    boldB = classes('btn-bold')[1],
    italicB = classes('btn-italic')[1]

resetA.addEventListener('click', e => {
    chatA.innerHTML = '';
})
resetB.addEventListener('click', e => {
    chatB.innerHTML = '';
})
boldA.addEventListener('click', e => {
    messageA.classList.toggle('bold');
})
boldB.addEventListener('click', e => {
    messageB.classList.toggle('bold');
})

italicA.addEventListener('click', e => {
    messageA.classList.toggle('italic');
})
italicB.addEventListener('click', e => {
    messageB.classList.toggle('italic');
})
sendA.addEventListener('click', e => {
    if(messageA.value != '' ){
        if(messageA.className == 'message bold'){
            chatA.innerHTML += `<p class="fromM">${messageA.value.bold()}</p>`
            chatB.innerHTML += `<div class= "chatY"><img src="./asset/img/a.png" alt=""><p class="fromY">${messageA.value.bold()}</p></div>`
        }
        else if(messageA.className == 'message italic'){
            chatA.innerHTML += `<p class="fromM">${messageA.value.italics()}</p>`
            chatB.innerHTML += `<div class= "chatY"><img src="./asset/img/a.png" alt=""><p class="fromY">${messageA.value.italics()}</p></div>`
        }
        else if(messageA.className == 'message italic bold' || messageA.className == 'message bold italic'){
            chatA.innerHTML += `<p class="fromM">${messageA.value.italics().bold()}</p>`
            chatB.innerHTML += `<div class= "chatY"><img src="./asset/img/a.png" alt=""><p class="fromY">${messageA.value.italics().bold()}</p></div>`
        }
        else {
            chatA.innerHTML += `<p class="fromM">${messageA.value}</p>`
            chatB.innerHTML += `<div class= "chatY"><img src="./asset/img/a.png" alt=""><p class="fromY">${messageA.value}</p></div>`
        }
    }
    messageA.value = '';
})
sendB.addEventListener('click', e => {
    if(messageB.value != ''){
        if(messageB.className == 'message bold'){
            chatB.innerHTML += `<p class="fromM">${messageB.value.bold()}</p>`
            chatA.innerHTML += `<div class= "chatY"><img src="./asset/img/letter-b.png" alt=""><p class="fromY">${messageB.value.bold()}</p></div>`
        }
        else if(messageB.className == 'message italic'){
            chatB.innerHTML += `<p class="fromM">${messageB.value.italics()}</p>`
            chatA.innerHTML += `<div class= "chatY"><img src="./asset/img/letter-b.png" alt=""><p class="fromY">${messageB.value.italics()}</p></div>`
        }
        else if(messageB.className == 'message italic bold' || messageB.className == 'message bold italic'){
            chatB.innerHTML += `<p class="fromM">${messageB.value.italics().bold()}</p>`
            chatA.innerHTML += `<div class= "chatY"><img src="./asset/img/letter-b.png" alt=""><p class="fromY">${messageB.value.italics().bold()}</p></div>`
        }
        else {
            chatB.innerHTML += `<p class="fromM">${messageB.value}</p>`
            chatA.innerHTML += `<div class= "chatY"><img src="./asset/img/letter-b.png" alt=""><p class="fromY">${messageB.value}</p></div>`
        }
    }
    messageB.value = '';
})

