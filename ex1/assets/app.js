let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let query = (select) => document.querySelector(select);

let username = id("name"),
    email = id("email"),
    password = id("password"),
    phone = id("phone"),
    birthday = id("birthday"),
    confirmPassword = id("confirm"),
    errorMsg = classes("error"),
    form = id("form"),
    btnAdd = id("btn-add"),
    btnReset = id("btn-reset"),
    dataName = query(".fullName"),
    dataEmail = query(".email"),
    dataPhone = query(".phone"),
    dataBirthday = query(".birthday"),
    dataImg = query(".avatar_preview")
birthday.max = new Date().toISOString().split("T")[0];
//check data
let error = (id, serial, message) => {
    errorMsg[serial].innerHTML = message;
    id.style.border = "2px solid red";
};
let success = (id, serial) => {
    errorMsg[serial].innerHTML = '';
    id.style.border = "2px solid";
}
function checkValidate() {
    checkName();
    checkBirthday();
    checkPhone();
    checkEmail();
    checkPassword();
    checkMatchPassword();
    if (
        checkName() && checkBirthday() && checkPhone() && checkEmail() && checkPassword() && checkMatchPassword()
    ) {
        dataName.innerHTML = `<div class="fullName">Full Name: ${username.value}</div>`;
        dataBirthday.innerHTML = `<div class="birthday">Birthday: ${formatDate(birthday.value)}</div>`;
        dataEmail.innerHTML = `<div class="email">Email: ${email.value}</div>`;
        dataPhone.innerHTML = `<div class="phone">Phone: ${formatPhoneNumber(phone.value)}</div>`;
        dataImg.style.display = "block";
        query('.avatar_under').style.display = "none";
    }
}
//click add
btnAdd.addEventListener('click', (e) => {
    e.preventDefault();
    checkValidate();
});
//add by key shift
document.addEventListener('keydown', function (e) {
    if (e.keyCode == '16') {
        checkValidate();
    }
});
//click reset
btnReset.addEventListener('click', (e) => {
    e.preventDefault();
    form.reset();
    id('avatar_upload').style.display = 'none';
    id('text_upload').style.display = 'block';
    id('text_upload').style.marginLeft = '40px';
})
//reset by key delete 
document.addEventListener('keydown', function (event) {
    if (event.keyCode == '46') {
        form.reset();
    }
});

document.addEventListener('click', e => {
    if (password.value != '' && confirmPassword.value != '') {
        checkMatchPassword();
    }
    if (password.value != '') {
        checkPassword();
    }
    if (email.value != '') {
        checkEmail();
    }
    if (phone.value != '') {
        checkPhone();
    }
    if (birthday.value != '') {
        checkBirthday();
    }
    if (username.value != '') {
        checkName();
    }
})

//alway check
username.addEventListener('keyup', e => {
    if (errorMsg[0].textContent != '') {
        checkName();
    }
})
email.addEventListener('keyup', e => {
    if (errorMsg[1].textContent != '') {
        checkEmail();
    }
})
phone.addEventListener('keyup', e => {
    if (errorMsg[2].textContent != '') {
        checkPhone();
    }
})
birthday.addEventListener('keyup', e => {
    if (errorMsg[3].textContent != '') {
        checkBirthday();
    }
})
password.addEventListener('keyup', e => {
    if (errorMsg[4].textContent != '') {
        checkPassword();
    }
})
confirmPassword.addEventListener('keyup', e => {
    if (errorMsg[5].textContent != '') {
        checkMatchPassword();
    }
})

//format
function formatPhoneNumber(thePhone) {
    return `${thePhone.substr(0, 3)}-${thePhone.substr(3, 3)}-${thePhone.substr(6, 4)}`;
}

function formatDate(theDay) {
    dayArr = theDay.split("-");
    return dayArr[2] + "/" + dayArr[1] + "/" + dayArr[0];
}

//name
function checkName() {
    let theName = username.value;
    if (theName.trim() === '') {
        error(username, 0, "Username cannot be blank");
    }
    else if (theName != '' && theName.length < 50 && theName.length > 3) {
        success(username, 0);
        return true;
    }
    else {
        error(username, 0, "Name must be more than 3 letters and less than 50 letters");
        return false;
    }
}

//email
function checkEmail() {
    let theEmail = email.value;
    let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (theEmail.trim() === '') {
        error(email, 1, "Email cannot be blank");
    }
    else if (filter.test(theEmail) && theEmail.length > 3 && theEmail.length < 320) {
        success(email, 1);
        return true;
    } else {
        error(email, 1, "Incorrect email format");
        return false;
    }
}

//phone
function checkPhone() {
    let thePhone = phone.value;
    if (thePhone.trim() === '') {
        error(phone, 2, "Phone cannot be blank");
    }
    else if (thePhone[0] == 0 && thePhone.length == 10) {
        success(phone, 2);
        return true;
    }
    else {
        error(phone, 2, "Phone number must include 10 numbers starting with 0, format 090-123-4567")
        return false;
    }
}

//birthday
function checkBirthday() {
    let theDay = birthday.value;
    let currentDay = new Date().toISOString().split("T")[0];
    dayArr = theDay.split("-");
    if (dayArr[2] === '' || dayArr[1] === '' || dayArr[0] === '') {
        error(birthday, 3, "Date cannot be blank");
    }
    else if (currentDay < theDay && dayArr[2] !== '' && dayArr[1] !== '' && dayArr[0] !== '') {
        error(birthday, 3, "Date of birth must be less than current date")
        return false;
    }
    else {
        success(birthday, 3);
        return true;
    }
}

//password
function checkPassword() {
    let thePassword = password.value;
    let patt = new RegExp("^.*(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])[a-zA-Z0-9@#$%^&+=]*$");
    let regExp = /[a-zA-Z]/;
    if (thePassword === '') {
        error(password, 4, "Password cannot be blank");
    }
    else if (patt.test(thePassword) && regExp.test(thePassword[0]) && thePassword.length < 31) {
        success(password, 4)
        return true;
    }
    else {
        error(password, 4, "Password must contain 8-30 characters, start with a letter, contain special characters, numbers, uppercase letters");
        return false;
    }
}

//confirm password
function checkMatchPassword() {
    let theConfirmPassword = confirmPassword.value;
    let thePassword = password.value;
    if (theConfirmPassword == thePassword && theConfirmPassword != '') {
        success(confirmPassword, 5);
        return true;
    }
    if (theConfirmPassword != thePassword) {
        error(confirmPassword, 5, "Password not match");
        return false;
    }
}

let loadFile = function (event) {
    let avatarUpload = id('avatar_upload');
    avatarUpload.src = URL.createObjectURL(event.target.files[0]);
    dataImg.src = URL.createObjectURL(event.target.files[0]);
    avatarUpload.style.display = 'block';
    id('text_upload').style.display = 'none';
    avatarUpload.onload = function () {
        URL.revokeObjectURL(avatarUpload.src)
        URL.revokeObjectURL(dataImg.src) // free memory
    }
};

query(".input-btn").addEventListener('click', function () {
    query(".input-file").click();
}, false);