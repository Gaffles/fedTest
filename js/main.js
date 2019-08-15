
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

//capture all anchor clicks
function respondToTheClick (event) {
  event.preventDefault();
  
  if (event.target.id==='logclick1' || event.target.id==='logclick2' || event.target.id==='logclick3') {      
      event.target.parentElement.parentElement.previousElementSibling.textContent = 'Link disabled to show event capture in console';
      event.target.parentElement.parentElement.previousElementSibling.style.cssText = 'display:block;';
      setTimeout(function(){
        event.target.parentElement.parentElement.previousElementSibling.style.cssText = 'display:none;';
      }, 2000);   
  }
    console.log('Element clicked was: ' + event.target.id)
}

const allClicks = document.querySelectorAll('a');

for(let i = 0; i < allClicks.length; i++){     
    allClicks[i].addEventListener('click', respondToTheClick);      
}



