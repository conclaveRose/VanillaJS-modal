'use strict';

const btnLogin = document.querySelector('button.btn_login');
const btnCancel = document.querySelector('button.modal_cancel');
const modalContainer = document.querySelector('#modal__container');


function setBtnModal() {
    modalContainer.classList.remove('hidden');
}
function setModalCancel() {
    modalContainer.classList.add('hidden');
}


btnLogin.addEventListener('click', () => setBtnModal());
btnCancel.addEventListener('click', () => setModalCancel());