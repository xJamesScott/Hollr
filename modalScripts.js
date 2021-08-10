
const getTrigger = document.querySelectorAll('.modal-trigger');

const getModal = document.querySelector('.try-modal');

const getCloseModal = document.querySelector('.close');

document.querySelector('.close').addEventListener("click", () => {
    getModal.classList.remove('show');
});

getTrigger.forEach((e) => {
    e.addEventListener('click', (trigger) => {
        getModal.classList.add('show');
    });
});


