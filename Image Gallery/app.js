//Very Short Formula
// const [current, imgs] = [document.querySelector('#current'), document.querySelectorAll('.imgs img')];
// imgs.forEach(img => img.addEventListener('click', e => (current.src = e.target.src)));

// const current = document.querySelector('#current');
// const imgs = document.querySelectorAll('.imgs img');
// const opacity = 0.4;
// //Set first img opacity
// imgs[0].style.opacity = opacity;
// imgs.forEach(img => img.addEventListener('click', imgClick));
// // imgs.forEach(function(img){
// //     img.addEventListener('click', imgClick);
// // });

// function imgClick(e){
//     //Reset the Opacity
//      imgs.forEach(img => (img.style.opacity = 1));
//     // imgs.forEach(function(img){
//     //     img.style.opacity = 1;
//     // });
//     //Change current image src of clicked image
//     current.src = e.target.src;

//     //change the opacity to opacity var
//     e.target.style.opacity = opacity;
//     //Remove fade-in class after .5 sec
//     setTimeout(() => current.classList.remove('fade-in'),500);
//     //Add Fade In Class
//     current.classList.add('fade-in');

// }


const current = document.querySelector('#current');
const imgs = document.querySelector('.imgs');
const img = document.querySelectorAll('.imgs img');
const opacity = 0.4;

//Set first image opacity
img[0].style.opacity = opacity;

imgs.addEventListener('click', imgClick);

function imgClick(e){

    //reset opacity
    img.forEach(img => img.style.opacity = 1);

    //Current img src change
    current.src = e.target.src;

    //Add fade-in class
    current.classList.add('fade-in');

    //Remove fade-in after 0.5s
    setTimeout(() => current.classList.remove('fade-in'),500);

    //Change Opacity to Opacity var
    e.target.style.opacity = opacity;
}
