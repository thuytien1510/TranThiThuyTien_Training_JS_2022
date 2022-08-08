let list = document.getElementById('list');

let formItem = document.getElementsByTagName('p');

list.addEventListener('click', e => {
    e.preventDefault;
    for (let i = 0; i < formItem.length; i++) {
        formItem[i].classList.remove('highlight');
        if (list.value == '7' && i % 2 == 0) {
            formItem[i].classList.add('highlight');
        }
        if (list.value == '8' && i % 2 != 0) {
            formItem[i].classList.add('highlight');
        }
        if (list.value == '9') {
            formItem[i].classList.remove('highlight');
        }
    }
    formItem[list.value - 1].classList.add('highlight');
})
