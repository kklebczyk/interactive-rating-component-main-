const submit = document.querySelector(".submit");
const selection = document.querySelector(".selection");
const rating = document.querySelector('.rating');
const buttonsInSelection = document.querySelectorAll('.buttons-in-selection');
submit.addEventListener("click",() => {
    if(!selection.classList.contains('hidden')){
        selection.classList.add('hidden');
        rating.classList.add('visible');
    }
})

for(let i=0; i<buttonsInSelection.length; i++) {
  buttonsInSelection[i].addEventListener('click', function() {
    let rating = this.innerText;
    document.querySelector('.information-of-rating').innerText = 'You selected ' + rating + ' out of 5';
  });
}