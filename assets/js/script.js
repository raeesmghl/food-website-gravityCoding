

let pointer = document.getElementById('pointer');

document.addEventListener('mousemove',(a)=>{
    // console.log(a.x + ' ' + a.y)
    pointer.style.top = a.y+'px';
    pointer.style.left = a.x+'px';
})





let searchBox = document.querySelector('.search-box');

let input = document.querySelector('.search-box>input');

let hamburgerMenu = document.querySelector('.hamburger-menu');


let centerNav = document.querySelector('.center-nav');




let closeNav = document.querySelector('.center-nav>.close-nav');






searchBox.addEventListener('click',()=>{
    input.style.display = 'block'
    searchBox.style.borderRadius = '5px'
})



hamburgerMenu.addEventListener('click',()=>{
    centerNav.style.top = '0%';
})


closeNav.addEventListener('click',()=>{
    centerNav.style.top = '-100%';
})
