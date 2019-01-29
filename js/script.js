const button = document.querySelector('.burger');
const menu = document.querySelector('.user-nav');

button.addEventListener('click',()=>{
    menu.classList.toggle('dis-block');
});
