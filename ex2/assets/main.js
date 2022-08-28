let list = document.getElementById('list');
let form = document.getElementById('form');
let formItem = document.getElementsByTagName('p');

const option = [
    {
        value: "1",
        text: "1"
    },
    {
        value: "2",
        text: "2"
    },
    {
        value: "3",
        text: "3"
    },
    {
        value: "4",
        text: "4"
    },
    {
        value: "5",
        text: "5"
    },
    {
        value: "6",
        text: "6"
    },
    {
        value: "even",
        text: "Chẵn"
    },
    {
        value: "odd",
        text: "Lẻ"
    },
    {
        value: "reset",
        text: "Reset"
    }
]
const arrForm = ['Hà Nội', 'Sài Gòn', 'Đà Nẵng', 'Huế', 'Hải Phòng', 'Nha Trang'];

list.innerHTML = option.map(({value, text}) => {
    return `
        <option value="${value}">${text}</option>
    `
})

form.innerHTML = arrForm.map((e, i) => {
    i++;
    return `
    <p class="form-item">${i}. ${e}</p>
    `
}).join('')

list.addEventListener('click', e => {
    e.preventDefault;
    for (let i = 0; i < formItem.length; i++) {
        formItem[i].classList.remove('highlight');
        if (list.value == 'even' && i % 2 != 0) {
            formItem[i].classList.add('highlight');
        }
        if (list.value == 'odd' && i % 2 == 0) {
            formItem[i].classList.add('highlight');
        }
        if (list.value == 'reset') {
            formItem[i].classList.remove('highlight');
        }
    }
    formItem[list.value - 1].classList.add('highlight');
})
