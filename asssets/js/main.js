


//! NAVIGATION 
document.addEventListener('DOMContentLoaded', function() {
    const menuBar = document.querySelector('.menu-bar');
    const navigation = document.querySelector('.navigation_bar');
    const navLeftArrow = document.querySelector('.nav-left-arrow');
    const headContainer = document.querySelector('.head-container');
    const main=document.querySelector('main');
    const footer=document.querySelector('footer')
    menuBar.addEventListener('click', function() {
        navigation.classList.toggle('active');
        headContainer.classList.toggle('hidden');
        main.classList.toggle('hidden');
        footer.classList.toggle('hidden');
        
    });
    navLeftArrow.addEventListener('click', function() {
        navigation.classList.remove('active');
        headContainer.classList.remove('hidden');
        main.classList.remove('hidden');
        footer.classList.remove('hidden');
    });
});

//! GALLERY 
let scroll = document.querySelector('.gallery');
const leftbtn = document.getElementById('leftbtn');
const rightbtn = document.getElementById('rightbtn');
scroll.addEventListener('wheel', (a) => {
    a.preventDefault(); 
    scroll.scrollLeft += a.deltaY; 
});
leftbtn.addEventListener('click', () => {
    scroll.scrollLeft -= 400; 
});

rightbtn.addEventListener('click', () => {
    scroll.scrollLeft += 400; 
});

//! PRODUCTS
let scrollProduct = document.querySelector('.product');
scrollProduct.addEventListener('wheel', (a) => {
    a.preventDefault(); 
    scrollProduct.scrollLeft += a.deltaY; 
});

//! CARS
let scrollCar = document.querySelector('.car_box');
scrollCar.addEventListener('wheel', (a) => {
    a.preventDefault(); 
    scrollCar.scrollLeft += a.deltaY; 
    
});





