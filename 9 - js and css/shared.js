const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const selectPlanButtons = document.querySelectorAll('.plan button');
const modalBtnNo = document.getElementById('btn-no');

// console.dir(backdrop);
for (let i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener('click', function () {
    modal.style.display = 'block';
    backdrop.style.display = 'block';
  });
}

const closeModal = () => {
  console.log('clicked');
  modal.style.display = 'none';
  backdrop.style.display = 'none';
};

backdrop.addEventListener('click', closeModal);
modalBtnNo.addEventListener('click', closeModal);
