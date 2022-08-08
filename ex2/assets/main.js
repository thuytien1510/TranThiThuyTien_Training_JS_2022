let list = document.getElementById('list');
let form = document.getElementById('form');
let formItem = document.getElementsByTagName('p');

const arrOption = ['1', '2', '3', '4', '5', '6', 'Chẵn', 'Lẻ', 'Reset'];
const arrForm = ['Hà Nội', 'Sài Gòn','Đà Nẵng', 'Huế', 'Hải Phòng', 'Nha Trang'];

list.innerHTML = arrOption.map((e, i) =>{
    i++;
    return `
        <option value="${i}">${e}</option>
    `
})

form.innerHTML = arrForm.map((e,i) => {
    i++;
    return `
    <p class="form-item">${i}. ${e}</p>
    `
}).join('')

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
