
//image substitution
const img01 = document.querySelector('#image-01');
const img02 = document.querySelector('#image-02');
const img03 = document.querySelector('#image-03');
let modalImg = document.querySelector('#image-modal');

img01.addEventListener('click', function () {
  modalImg.src='img/3-Card_CTA/Card-01/Image-01.jpg';
});

img02.addEventListener('click', function () {
  modalImg.src='img/3-Card_CTA/Card-02/Image-02.jpg';
});

img03.addEventListener('click', function () {
  modalImg.src='img/3-Card_CTA/Card-03/Image-03.jpg';
});



