// const navToggle = document.querySelector('.mobile-nav-toggle');
// const nav = document.querySelector('.nav');


// navToggle.addEventListener('click', () => {
//     nav.classList.toggle('nav--visible');
// })

//Get the button
var backBtn = document.getElementById("backBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backBtn.style.display = "block";
    } else {
        backBtn.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}