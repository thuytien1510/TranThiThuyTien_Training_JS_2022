let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

id('btn-add').addEventListener('click', e => {
    id('list').innerHTML += `
    <tr>
    <td><input type="checkbox" name="" id=""></td>
    <td class="field-item"></td>
    <td class="field-item"></td>
    <td class="field-item"></td>
    <td><a href="#" class="delete" onclick="deleteRow(this)">DELETE</a></td>
    </tr>
    `
})

function deleteRow(r) {
    let i = r.parentNode.parentNode.rowIndex-1;
    document.getElementById("list").deleteRow(i);
}

id('selectAll').addEventListener('click', e => {
    let checkboxes = document.querySelectorAll('input[type="checkbox"]');
    if (id('selectAll').checked) {
        for (let checkbox in checkboxes) {
            checkboxes[checkbox].setAttribute('checked','checked');
        }
    }
    else {
        for (let checkbox in checkboxes) {
            checkboxes[checkbox].removeAttribute('checked');
        }
    }
})

id('btn-delete').addEventListener('click', e => {
    let checkboxes = id('list').querySelectorAll('input[type="checkbox"]');
    for (let checkbox in checkboxes) {
        if (checkboxes[checkbox].checked) {
            id('list').removeChild(checkboxes[checkbox].parentNode.parentNode);
            id('selectAll').checked = false;
        }
    }
})

id('table').addEventListener('click', e => {
    if (e.target.classList.contains('field-item')) {
        e.target.setAttribute('contenteditable', true)
    }
})

