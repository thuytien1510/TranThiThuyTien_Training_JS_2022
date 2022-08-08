let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let query = (select) => document.querySelector(select);

let username = id("name"),
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
let error = (id, message) => {
    id.parentElement.querySelector('.error').innerHTML = message;
    id.style.border = "2px solid red";
};
let success = (id) => {
    id.parentNode.querySelector('.error').innerHTML = '';
    id.style.border = "2px solid";
}
const notEmpty = (value) => {
    if(value.trim() != ''){
        return true;
    }
    else return false
}
document.addEventListener('click', e => {
    if (notEmpty(password.value) && notEmpty(confirmPassword.value)) {
        checkMatchPassword();
    }
    if (notEmpty(password.value)) {
        checkPassword();
    }
    if (notEmpty(email.value)) {
        checkEmail();
    }
    if (notEmpty(phone.value)) {
        checkPhone();
    }
    if (notEmpty(birthday.value)) {
        checkBirthday();
    }
    if (notEmpty(username.value)) {
        checkName();
    }
})
function checkValidate() {
    checkName();
    checkBirthday();
    checkPhone();
    checkEmail();
    checkPassword();
    checkMatchPassword();
}
const hasError = (id) => {
    if(id.parentElement.querySelector('.error').textContent != ''){
        return true;
    }
    else return false;
}
//alway check
username.addEventListener('keyup', e => {
    if (hasError(username)) {
        checkName();
    }
})
email.addEventListener('keyup', e => {
    if (hasError(email)) {
        checkEmail();
        checkName();
    }
})
phone.addEventListener('keyup', e => {
    if (hasError(phone)) {
        checkPhone();
    }
})
birthday.addEventListener('keyup', e => {
    if (hasError(birthday)) {
        checkBirthday();
    }
})
password.addEventListener('keyup', e => {
    if (hasError(password)) {
        checkPassword();
    }
})
confirmPassword.addEventListener('keyup', e => {
    if (hasError(confirmPassword)) {
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
//checkLength
const minMaxLength = (length, min, max) => {
    if(length < min || length > max){
        return false;
    }
    else return true;
}
//name
function checkName() {
    let theName = username.value;
    if (!notEmpty(theName)) {
        error(username, "Username cannot be blank");
    }
    else if (notEmpty(theName) && minMaxLength(theName.length,3,50)) {
        success(username);
        return true;
    }
    else {
        error(username, "Name must be more than 3 letters and less than 50 letters");
        return false;
    }
}

//email
function checkEmail() {
    let theEmail = email.value;
    let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!notEmpty(theEmail)) {
        error(email, "Email cannot be blank");
    }
    else if (filter.test(theEmail) && minMaxLength(theEmail.length,3,320)) {
        success(email);
        return true;
    } else {
        error(email,"Incorrect email format");
        return false;
    }
}

//phone
function checkPhone() {
    let thePhone = phone.value;
    if (!notEmpty(thePhone)) {
        error(phone, "Phone cannot be blank");
    }
    else if (thePhone[0] == 0 && thePhone.length == 10) {
        success(phone);
        return true;
    }
    else {
        error(phone, "Phone number must include 10 numbers starting with 0, format 090-123-4567")
        return false;
    }
}

//birthday
function checkBirthday() {
    let theDay = birthday.value;
    let currentDay = new Date().toISOString().split("T")[0];
    dayArr = theDay.split("-");
    if (!notEmpty(dayArr[2]) || !notEmpty(dayArr[1])|| !notEmpty(dayArr[0])){
        error(birthday, "Date cannot be blank");
    }
    else if (currentDay < theDay && notEmpty(dayArr[2]) && notEmpty(dayArr[1])&& notEmpty(dayArr[0])) {
        error(birthday, "Date of birth must be less than current date")
        return false;
    }
    else {
        success(birthday);
        return true;
    }
}

//password
function checkPassword() {
    let thePassword = password.value;
    let patt = new RegExp("^.*(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])[a-zA-Z0-9@#$%^&+=]*$");
    let regExp = /[a-zA-Z]/;
    if (thePassword === '') {
        error(password, "Password cannot be blank");
    }
    else if (patt.test(thePassword) && regExp.test(thePassword[0]) && minMaxLength(thePassword,8,31)) {
        success(password)
        return true;
    }
    else {
        error(password, "Password must contain 8-30 characters, start with a letter, contain special characters, numbers, uppercase letters");
        return false;
    }
}

//confirm password
function checkMatchPassword() {
    let theConfirmPassword = confirmPassword.value;
    let thePassword = password.value;
    if (theConfirmPassword == thePassword && notEmpty(theConfirmPassword)) {
        success(confirmPassword);
        return true;
    }
    if (theConfirmPassword != thePassword) {
        error(confirmPassword,  "Password not match");
        return false;
    }
}

let loadFile = function (event) {
    let avatarUpload = query('.avatar_upload');
    avatarUpload.src = URL.createObjectURL(event.target.files[0]);
    dataImg.src = URL.createObjectURL(event.target.files[0]);
    avatarUpload.classList.add('show');
    query('.text_upload').classList.remove('show');
    query('.text_upload').classList.add('hidden');
    avatarUpload.onload = function () {
        URL.revokeObjectURL(avatarUpload.src)
        URL.revokeObjectURL(dataImg.src) // free memory
    }
};

query(".image").addEventListener('click', function () {
    id("file-input").click();
}, false);


//click add
btnAdd.addEventListener('click', (e) => {
    e.preventDefault();
    checkValidate();
    dataName.innerHTML += username.value;
    dataBirthday.innerHTML += formatDate(birthday.value);
    dataEmail.innerHTML += email.value;
    dataPhone.innerHTML += formatPhoneNumber(phone.value);
    dataImg.classList.add('show');
    query('.text_avatar_under').classList.add('hidden');
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
    query('.avatar_upload').classList.remove('show');
    query('.avatar_upload').classList.add('hidden');
    query('.text_upload').classList.remove('hidden');
    query('.text_upload').classList.add('show');
    query('.text_upload').style.marginLeft = '40px';
})
//reset by key delete 
document.addEventListener('keydown', function (event) {
    if (event.keyCode == '46') {
        form.reset();
    }
});

