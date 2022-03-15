const downChevron = document.querySelector('.chevronDown p');
const introProjectLink = document.querySelector('#intro-project-link');
const card = document.querySelector('.card');
const hamburger = document.querySelector('#hamburger');
const navUl = document.querySelector('#nav-ul');
const menuBg = document.querySelector('#menu-bg');



hamburger.addEventListener('click', ()=> {
    navUl.classList.toggle('show');
    menuBg.classList.toggle('change-bg');
    hamburger.classList.toggle('hamburgerBlack');
})




// introProjectLink.addEventListener('click', ()=> {
//     window.scrollTo({
//         top: 890,
//         left: 0,
//         behavior: 'smooth'
//       });
// })

// function addPurple(params) {
  
// }

// card.addEventListener('mouseenter', ()=> {
//   let viewLiveBtn = document.querySelector('#view-live-button');
//   let viewGithubBtn = document.querySelector('#view-github-button');

//   viewLiveBtn.classList.add('changeColour');
//   viewGithubBtn.classList.add('changeColour');
// })
// card.addEventListener('mouseleave', ()=> {
//   let viewLiveBtn = document.querySelector('#view-live-button');
//   let viewGithubBtn = document.querySelector('#view-github-button');
//   viewLiveBtn.classList.remove('changeColour');
//   viewGithubBtn.classList.remove('changeColour');
// })

