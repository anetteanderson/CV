const fNameSpan = document.querySelector('#fName');
const lNameSpan = document.querySelector('#lName');
const ageSpan = document.querySelector('#age');
const emailSpan = document.querySelector('#email');

const images = ['1.jpeg', '2.jpeg'];
const targetImages = document.querySelector('.cv-image img');
let i = 1;

window.onload = () => {
    fetch('person.json')
        .then(response => response.json())
        .then(data => {

            console.log(data);
            
            fNameSpan.textContent = data.fName;
            lNameSpan.textContent = data.lName;
            ageSpan.textContent = data.age;
            emailSpan.textContent = data.email;
        });
};

targetImages.addEventListener('click', () => {
    targetImages.style.opacity = '0';

    setTimeout(() => {
        targetImages.src = 'images/' + images[i];

        if (i === images.length - 1) {
            i = 0;
        } else {
            i++;
        }

        targetImages.style.opacity = '1';
    }, 500);
});
