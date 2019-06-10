// Your code goes here
const button = document.querySelectorAll('.btn');
button[0].addEventListener('click', event =>{
    button[0].style.backgroundColor = 'orange';
});
button[1].addEventListener('click', event => {
    button[1].style.backgroundColor = 'green';
});
button[2].addEventListener('click', event => {
    button[2].style.backgroundColor = '#17A2B8';
});

const introHeadline = document.querySelector('.intro h2');
// console.log(introHeadline);
introHeadline.addEventListener('mouseover', event => {
    introHeadline.textContent = 'We like to party!';
});
introHeadline.addEventListener('mouseout', event => {
    introHeadline.textContent = 'Welcome To Fun Bus!'
});

const mainNav = document.querySelector('.main-navigation');
mainNav.addEventListener('mouseenter', event => {
    mainNav.style.backgroundColor = '#17A2B8';
    mainNav.style.color = 'white';
});

window.addEventListener('load', event => {
    alert ("Hello from the other side");
});

const footer = document.querySelector('.footer');
window.addEventListener('scroll', event => {
    footer.style.backgroundColor = '#17A2B8';
});

const footerP = document.querySelector('.footer p');
window.addEventListener('scroll', event =>{
    footerP.style.color = 'white';
    footerP.style.fontSize = '24px';
});

const headerImg = document.querySelector('.intro img');
headerImg.addEventListener('mouseover', event =>{
    headerImg.style.display = 'none';
});

const navLinks = document.querySelectorAll('.nav-link');
// console.log(navLinks);
navLinks.forEach(item => {
    item.style.color = 'white';
    item.addEventListener('click', event =>{
        event.preventDefault();
    });
    });

