'use strict';

const billValue = document.getElementById('bill');
const selector = document.querySelector('.custom-select select');
const btnSubmit = document.querySelector('.submit');
const openModal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');

const setBill = document.querySelector('.user-amount');
const setService = document.querySelector('.service-choice');
const setTipPercent = document.querySelector('.tip-percent');
const setTipAmount = document.querySelector('.tip-amount');

btnSubmit.addEventListener('click', () => {
  // Calculate tip value
  const tipPercent = selector.value == 1 ? 20 : 15;
  const userBill = billValue.value;
  const tip = ((tipPercent / 100) * userBill).toFixed(2);
  // Display modal
  openModal.classList.remove('hidden');
  setBill.textContent = userBill;
  setService.textContent =
    selector.value == 1 ? 'great service 👍' : 'bad service 👎';
  setTipPercent.textContent = tipPercent;
  setTipAmount.textContent = tip;
});

closeModal.addEventListener('click', () => {
  openModal.classList.add('hidden');
});
