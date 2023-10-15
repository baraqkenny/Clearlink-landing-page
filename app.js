const openSlideNav = document.getElementById("open__slide__nav");
const closeSlideNav = document.getElementById("close__slide__nav"); 
const sideNav = document.getElementById("side__nav");

 openSlideNav.addEventListener('click',()=>{
    sideNav.style.width = '250px';
})


closeSlideNav.addEventListener('click', ()=> {
    sideNav.style.width = '0';
})