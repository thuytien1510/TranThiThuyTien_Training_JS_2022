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

const styleMessM = (mess, chatM) => {
    if (mess.value != '') {
        let pM = document.createElement('p');
        let message1 = document.createTextNode(`${mess.value}`);
        chatM.append(pM);
        pM.append(message1);
        pM.classList.add('fromM');
        let class1 = mess.classList.value.split(' ')[1];
        let class2 = mess.classList.value.split(' ')[2];
        pM.classList.add(class1);
        pM.classList.add(class2);
    }
}
const styleMessY = (mess, chatY, image) => {
    if (mess.value != '') {
        let pY = document.createElement('p');
        let div = document.createElement('div');
        let img = document.createElement('img');
        let message2 = document.createTextNode(`${mess.value}`);
        chatY.append(div);
        pY.append(message2);
        pY.classList.add('fromY');
        div.append(img);
        div.append(pY);
        img.src = image;
        div.classList.add('chatY');
        let class1 = mess.classList.value.split(' ')[1];
        let class2 = mess.classList.value.split(' ')[2];
        pY.classList.add(class1);
        pY.classList.add(class2);
    }
}
sendA.addEventListener('click', e => {
    styleMessM(messageA, chatA);
    styleMessY(messageA, chatB, "./asset/img/a.png");
    messageA.value = '';
})
sendB.addEventListener('click', e => {
    styleMessM(messageB, chatB);
    styleMessY(messageB, chatA, "./asset/img/letter-b.png");
    messageB.value = '';
})
document.addEventListener('keydown', e => {
    if (e.keyCode == '13') {
        sendA.click();
        sendB.click();
    }
})
