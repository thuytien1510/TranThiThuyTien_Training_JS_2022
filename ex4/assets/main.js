let id = (id) => document.getElementById(id);

const dots = document.querySelectorAll(".dot-container button");
const images = document.querySelectorAll(".image-container img");
let i = 0; // current slide
let j = 6; // total slides
function next(){
    id("content" + (i+1)).classList.remove("active");
    i = ( j + i + 1) % j;
    id("content" + (i+1)).classList.add("active");
    indicator( i+ 1 );
}
function prev(){
    id("content" + (i+1)).classList.remove("active");
    i = (j + i - 1) % j;
    id("content" + (i+1)).classList.add("active");
    indicator(i+1);
}
function indicator(num){
    dots.forEach(function(dot){
        dot.style.backgroundColor = "transparent";
    });
    document.querySelector(".dot-container button:nth-child(" + num + ")").style.backgroundColor = "#121313";
}
function dot(index){
    images.forEach(function(image){
        image.classList.remove("active");
    });
    id("content" + index).classList.add("active");
    i = index - 1;
    indicator(index);
}