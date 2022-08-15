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
    boldA.classList.toggle('active');
    messageA.classList.toggle('bold');
})
boldB.addEventListener('click', e => {
    boldB.classList.toggle('active');
    messageB.classList.toggle('bold');
})
italicA.addEventListener('click', e => {
    italicA.classList.toggle('active');
    messageA.classList.toggle('italic');
})
italicB.addEventListener('click', e => {
    italicB.classList.toggle('active');
    messageB.classList.toggle('italic');
})

const styleMess = (mess, chat, classInput,classDiv, imgAvatar) => {
    if (mess.value == '') return;
    let p = document.createElement('p');
    let div = document.createElement('div');
    let img = document.createElement('img');
    chat.append(div);
    div.className = classDiv;
    p.innerHTML = `${mess.value }`;
    if(classDiv != ''){
        div.append(img);
        img.src = imgAvatar;
    }
    div.append(p);
    p.className = classInput + ' '+ mess.className;
}

sendA.addEventListener('click', e => {
    styleMess(messageA, chatA, 'fromM', '');
    styleMess(messageA, chatB, 'fromY','chatY', "./asset/img/a.png" );
    messageA.value = '';
})
sendB.addEventListener('click', e => {
    styleMess(messageB, chatB, 'fromM','');
    styleMess(messageB, chatA, 'fromY','chatY',"./asset/img/letter-b.png");
    messageB.value = '';
})
document.addEventListener('keydown', e => {
    if (e.keyCode == '13') {
        sendA.click();
        sendB.click();
    }
})
