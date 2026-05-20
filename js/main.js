
document.addEventListener("DOMContentLoaded", function(){

const btn = document.getElementById("menuToggle");
const menu = document.getElementById("mobileMenu");

if(btn && menu){

btn.addEventListener("click", function(){

menu.classList.toggle("active");

});

}

document.querySelectorAll('#mobileMenu a').forEach(function(link){

link.addEventListener("click", function(){

menu.classList.remove("active");

});

});

});
