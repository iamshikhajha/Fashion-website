const hamburger = document.querySelector('.hamburger')
const nav = document.querySelector('.nav-items')

hamburger.addEventListener('click', () =>{
    nav.classList.toggle('show')
})