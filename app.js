const images = ['1.jpeg', '2.jpeg'];
const targetImages = document.querySelector('.cv-image img');
let i = 1;

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
