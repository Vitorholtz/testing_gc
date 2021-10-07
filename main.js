const SideMenuIcon = document.querySelector('.menu-box');
const SideMenu = document.querySelector('.gc-side-menu');
const NewProgramBtn= document.querySelector('.new-program-btn');
const NewProgramModal= document.querySelector('.modal-background');


SideMenuIcon.addEventListener('click', () => {
    SideMenu.classList.toggle('gc-side-menu--active');
});

NewProgramBtn.addEventListener('click', () => {
    NewProgramModal.classList.toggle('modal-background--active');
});
