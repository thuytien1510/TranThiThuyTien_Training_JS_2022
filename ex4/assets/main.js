let id = (id) => document.getElementById(id);

const dots = document.querySelectorAll(".dot-container button");
const images = document.querySelectorAll(".image-container img");

let index = 1;
showSlides(index);

function plusSlides(n) {
    showSlides(index += n);
}

function dot(n) {
    showSlides(index = n);
}
function showSlides(n) {
    let i;
    if (n > images.length) { index = 1 }
    if (n < 1) { index = images.length }
    for (i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    images[index - 1].style.display = "block";
    dots[index - 1].className += "active";
}