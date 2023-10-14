const projectBtn = document.querySelector('.nav-btn');
const projectsSection = document.querySelector('#projects');


projectBtn.addEventListener('click', () => {
    projectsSection.scrollIntoView({ behavior: 'smooth' });
});


const skillsBtn = document.querySelector('.nav-btn-two');
const skillsSection = document.querySelector('#skills');


skillsBtn.addEventListener('click', () => {
    skillsSection.scrollIntoView({ behavior: 'smooth' });
});


const aboutMeBtn = document.querySelector('.nav-btn-three');
const aboutMeSection = document.querySelector('#about');


aboutMeBtn.addEventListener('click', () => {
    aboutMeSection.scrollIntoView({ behavior: 'smooth' });
});
